import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import './detailView.css';
import PDFViewer from '../pdfView/PDFViewer';

interface DetailViewProps {
  selected: any;
  onBack: () => void;
}

export const DetailView: React.FC<DetailViewProps> = ({
  selected,
  onBack,
}) => {
  return (
    <section className="detail-container">
      <Button
        variant="outline"
        size="sm"
        onClick={onBack}
        className="back-btn"
      >
        ← Volver al Inicio
      </Button>

      {/* HEADER */}
      <Card shadow="sm" className="detail-card">
        <div className="detail-header">
          <div>
            <span className="detail-badge">
              {selected.category}
            </span>

            <h2 className="detail-title">
              {selected.titulo}
            </h2>

            <p className="detail-description">
              Documento académico disponible para consulta y vista previa.
            </p>
          </div>
        </div>

        {/* METADATA */}
        <div className="metadata-grid">
          <div className="metadata-item">
            <span className="metadata-label">
              Autor
            </span>

            <span className="metadata-value">
              {selected.autor}
            </span>
          </div>

          <div className="metadata-item">
            <span className="metadata-label">
              Categoría
            </span>

            <span className="category-pill">
              {selected.category}
            </span>
          </div>

          <div className="metadata-item">
            <span className="metadata-label">
              Fecha
            </span>

            <span className="metadata-value">
              {new Date(selected.fecha).toLocaleDateString(
                'es-ES',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              )}
            </span>
          </div>
        </div>
      </Card>

      {/* PDF */}
      <Card shadow="sm" className="pdf-card">
        <div className="pdf-header">
          <div className="pdf-header-left">
            <span className="pdf-icon">📄</span>

            <div>
              <h3>Vista Previa</h3>
              <p>
                Navega entre las páginas del documento.
              </p>
            </div>
          </div>
        </div>

        <div className="pdf-body">
          <PDFViewer
            pdfUrl={selected.pdfUrl}
            title={selected.titulo}
          />
        </div>
      </Card>
    </section>
  );
};