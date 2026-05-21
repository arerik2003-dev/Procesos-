'use client';

import { useEffect, useState } from 'react';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

export default function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [Document, setDocument] = useState<any>(null);
  const [Page, setPage] = useState<any>(null);

  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadPdf = async () => {
      const reactPdf = await import('react-pdf');

      reactPdf.pdfjs.GlobalWorkerOptions.workerSrc =
        `https://unpkg.com/pdfjs-dist@${reactPdf.pdfjs.version}/build/pdf.worker.min.mjs`;

      setDocument(() => reactPdf.Document);
      setPage(() => reactPdf.Page);
    };

    loadPdf();
  }, []);

  function onDocumentLoadSuccess({
    numPages,
  }: {
    numPages: number;
  }) {
    setNumPages(numPages);
  }

  if (!Document || !Page) {
    return (
      <div className="w-full flex justify-center p-10">
        Cargando PDF...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full bg-white rounded-xl shadow-lg border border-gray-100 p-4">
      <div className="overflow-auto w-full flex justify-center">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="max-w-full"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer
            renderAnnotationLayer
            className="shadow-md"
          />
        </Document>
      </div>

      {numPages && (
        <div className="flex items-center justify-between w-full mt-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
          <button
            disabled={pageNumber <= 1}
            onClick={() =>
              setPageNumber((prev) => Math.max(prev - 1, 1))
            }
            className="px-4 py-2 bg-blue-900 rounded hover:bg-blue-800 disabled:opacity-50"
            style={{color:"white"}}
          >
            Anterior
          </button>

          <span className="text-sm font-medium text-gray-700">
            Página {pageNumber} de {numPages}
          </span>

          <button
            disabled={pageNumber >= numPages}
            onClick={() =>
              setPageNumber((prev) =>
                Math.min(prev + 1, numPages)
              )
            }
            className="px-4 py-2 bg-blue-900 rounded hover:bg-blue-800 disabled:opacity-50"
            style={{color:"white"}}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}