'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface Slide {
  content: string;
  equations: string[];
}

interface Presentation {
  id: string;
  title: string;
  author: string;
  date: string;
  slides: Slide[];
}

interface AdvancedSlideViewerProps {
  dataUrl: string;
}

export default function AdvancedSlideViewer({ dataUrl }: AdvancedSlideViewerProps) {
  const [presentation, setPresentation] = useState<Presentation | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(dataUrl);
        if (!response.ok) throw new Error(`Error al cargar datos: ${response.status}`);
        const data = await response.json();
        setPresentation(data);
      } catch (err) {
        console.error(err);
        setError(
          'No se pudieron cargar los materiales. Por favor, asegúrate de estar usando un servidor local (ej. Live Server) para evitar problemas de CORS.'
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dataUrl]);

  const nextSlide = useCallback(() => {
    if (presentation) {
      setCurrentIndex((prev) => (prev < presentation.slides.length - 1 ? prev + 1 : prev));
    }
  }, [presentation]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (loading)
    return <div className="p-4 sm:p-8 text-center text-blue-900">Cargando material académico...</div>;
  if (error)
    return <div className="p-4 sm:p-8 text-center text-red-600 bg-red-50 rounded-lg">{error}</div>;
  if (!presentation) return null;

  const currentSlide = presentation.slides[currentIndex];

  return (
    /* Contenedor principal fluido con padding responsivo */
    <div
      ref={viewerRef}
      className="flex flex-col items-center w-full max-w-4xl mx-auto bg-gray-50 p-3 sm:p-6 rounded-2xl"
    >
      {/* Slide Stage */}
      <div className="w-full aspect-[16/9] bg-white rounded-xl shadow-lg p-4 sm:p-8 md:p-12 overflow-y-auto transition-opacity duration-500 ease-in-out border border-gray-100 flex flex-col justify-center">
        <article
          className="
            prose prose-slate max-w-none text-gray-800
            prose-sm sm:prose-base
            overflow-x-auto
          "
        >
          {/* Contenido de texto con overflow controlado */}
          <div className="max-w-full overflow-x-auto">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {currentSlide.content}
            </ReactMarkdown>
          </div>

          {/* Contenedor de ecuaciones KaTeX: max-w-full + overflow-x-auto */}
          {currentSlide.equations.length > 0 && (
            <div className="mt-4 sm:mt-6 max-w-full overflow-x-auto">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {currentSlide.equations.map((eq) => `$$${eq}$$`).join('\n\n\n')}
              </ReactMarkdown>
            </div>
          )}
        </article>
      </div>

      {/* Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between w-full mt-3 sm:mt-6 bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200 gap-2">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-900 text-white text-sm sm:text-base rounded-lg hover:bg-blue-800 disabled:opacity-50 transition-colors flex items-center gap-1 sm:gap-2"
        >
          ← <span className="hidden xs:inline">Anterior</span>
        </button>

        <span className="font-semibold text-blue-900 text-sm sm:text-base order-3 sm:order-none w-full sm:w-auto text-center">
          Diapositiva {currentIndex + 1} de {presentation.slides.length}
        </span>

        <div className="flex gap-2">
          <button
            onClick={toggleFullscreen}
            className="px-2 py-2 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
            title="Pantalla Completa"
          >
            <span className="hidden sm:inline">⛶ Pantalla Completa</span>
            <span className="sm:hidden">⛶</span>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === presentation.slides.length - 1}
            className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-900 text-white text-sm sm:text-base rounded-lg hover:bg-blue-800 disabled:opacity-50 transition-colors flex items-center gap-1 sm:gap-2"
          >
            <span className="hidden xs:inline">Siguiente</span> →
          </button>
        </div>
      </div>
    </div>
  );
}
