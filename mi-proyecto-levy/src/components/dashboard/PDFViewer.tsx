'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configuración del worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  selected: any;
  onToggleFullscreen: () => void;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ selected, onToggleFullscreen }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  if (!selected || !selected.pdfUrl) return <div className="p-10 text-center text-gray-500">Selecciona un documento</div>;

  return (
    <div className="flex flex-col h-full bg-gray-50 p-6">
      {/* Header del Visor - Institucional */}
      <div className="bg-white border-t-4 border-[#BB8800] shadow-sm px-6 py-4 mb-4 rounded-t-lg">
        <h2 className="text-xl font-bold text-[#002B7A]">{selected.titulo}</h2>
      </div>

      {/* Contenedor del Slide - Aspect Ratio 16/9 y h-75vh */}
      <div className="flex-1 w-full bg-gray-200 p-4 rounded-b-lg flex items-center justify-center">
        <div className="w-full h-[75vh] aspect-[16/9] bg-white shadow-2xl flex items-center justify-center p-2 rounded-lg transition-transform duration-200" style={{ transform: `scale(${scale})` }}>
          <Document
            file={selected.pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page pageNumber={pageNumber} height={500} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
        </div>
      </div>

      {/* Controles Personalizados */}
      <div className="mt-4 bg-white p-3 rounded-lg shadow-md flex items-center justify-center gap-4">
        <button onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))} className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft /></button>
        <span className="text-sm font-medium">Página {pageNumber} / {numPages}</span>
        <button onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages || 1))} className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight /></button>
        <div className="w-px h-6 bg-gray-300 mx-2" />
        <button onClick={() => setScale(s => Math.min(s + 0.1, 1.5))} className="p-2 hover:bg-gray-100 rounded-full"><ZoomIn size={20} /></button>
        <button onClick={() => setScale(s => Math.max(s - 0.1, 0.5))} className="p-2 hover:bg-gray-100 rounded-full"><ZoomOut size={20} /></button>
        <button onClick={onToggleFullscreen} className="p-2 hover:bg-gray-100 rounded-full"><Maximize2 size={20} /></button>
      </div>
    </div>
  );
};
