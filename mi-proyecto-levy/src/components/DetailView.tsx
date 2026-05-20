import React from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import PDFViewer from './PDFViewer';

interface DetailViewProps {
  selected: any;
  onBack: () => void;
}

export const DetailView: React.FC<DetailViewProps> = ({ selected, onBack }) => {
  return (
    <section>
      <Button
        variant="outline"
        size="sm"
        onClick={onBack}
        className="mb-6"
      >
        ← Volver al Inicio
      </Button>

      {/* Card de Metadatos */}
      <Card shadow="sm" className="p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          {selected.titulo}
        </h2>

        {/* Metadatos en Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-gray-200">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Autor
            </span>
            <span className="text-gray-800 font-medium">
              {selected.autor}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Categoría
            </span>
            <span className="inline-flex items-center gap-2 w-fit">
              <span className="text-sm font-medium text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                {selected.category}
              </span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Fecha
            </span>
            <span className="text-gray-800 font-medium">
              {new Date(selected.fecha).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </Card>

      {/* Visor de PDF */}
      <Card shadow="sm" className="overflow-hidden">
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <p className="text-sm font-medium text-gray-700">
            📄 Vista Previa del Documento
          </p>
        </div>
        <div className="p-4 flex justify-center bg-gray-50">
          <PDFViewer pdfUrl={selected.pdfUrl} title={selected.titulo} />
        </div>
      </Card>
    </section>
  );
};
