'use client';

import { useEffect, useState, useRef } from 'react';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import './pdfViewer.css';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

export default function PDFViewer({
  pdfUrl,
  title,
}: PDFViewerProps) {
  const [Document, setDocument] = useState<any>(null);
  const [Page, setPage] = useState<any>(null);

  const [numPages, setNumPages] =
    useState<number | null>(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.clientWidth;
        setContainerWidth(Math.max(width - 30, 800));
      }
    });

    if (wrapperRef.current) {
      resizeObserver.observe(wrapperRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
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
      <div className="pdf-loading">
        <div className="loader"></div>
        <span>Cargando PDF...</span>
      </div>
    );
  }

  return (
    <div className="pdf-viewer">
      <div className="pdf-title">
        <h4>{title}</h4>
      </div>

      <div className="pdf-document-wrapper" ref={wrapperRef}>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer
            renderAnnotationLayer
            className="pdf-page"
            width={containerWidth}
          />
        </Document>
      </div>

      {numPages && (
        <div className="pdf-controls">
          <button
            disabled={pageNumber <= 1}
            onClick={() =>
              setPageNumber((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            className="pdf-btn"
          >
            ← Anterior
          </button>

          <div className="pdf-page-indicator">
            Página <strong>{pageNumber}</strong> de{' '}
            <strong>{numPages}</strong>
          </div>

          <button
            disabled={pageNumber >= numPages}
            onClick={() =>
              setPageNumber((prev) =>
                Math.min(prev + 1, numPages)
              )
            }
            className="pdf-btn"
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
}