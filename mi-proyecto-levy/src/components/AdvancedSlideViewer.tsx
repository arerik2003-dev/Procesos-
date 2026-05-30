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
          'No se pudieron cargar los materiales. Por favor, asegúrate de estar usando un servidor local.'
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dataUrl]);

  const nextSlide = useCallback(() => {
    if (presentation) {
      setCurrentIndex((prev) =>
        prev < presentation.slides.length - 1 ? prev + 1 : prev
      );
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
    return (
      <div className="p-4 sm:p-8 text-center text-blue-900 text-sm md:text-base">
        Cargando material académico...
      </div>
    );

  if (error)
    return (
      <div className="p-4 sm:p-8 text-center text-red-600 bg-red-50 rounded-lg text-sm md:text-base">
        {error}
      </div>
    );

  if (!presentation) return null;

  const currentSlide = presentation.slides[currentIndex];

  return (
    /*
      Contenedor principal — Mobile First:
      - w-full y max-w-screen-xl para ser completamente fluido
      - padding: p-3 en móvil → sm:p-4 → md:p-6 → lg:p-8
    */
    <div
      ref={viewerRef}
      className="flex flex-col items-center w-full max-w-screen-xl mx-auto bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8 rounded-2xl"
    >
      {/* ── Slide Stage ── */}
      <div
        className="
          w-full overflow-y-auto
          bg-white rounded-xl shadow-lg border border-gray-100
          flex flex-col justify-start
          p-4 sm:p-6 md:p-8 lg:p-12
          min-h-[260px] md:aspect-[16/9]
          transition-opacity duration-300 ease-in-out
        "
      >
        {/*
          prose-sm en móvil → md:prose-base en escritorio
          overflow-x-auto para que nada se desborde horizontalmente
        */}
        <article className="prose prose-slate max-w-none prose-sm md:prose-base text-gray-800 overflow-x-auto">

          {/* Bloque de contenido de texto */}
          <div className="w-full overflow-x-auto">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {currentSlide.content}
            </ReactMarkdown>
          </div>

          {/* Bloque de ecuaciones KaTeX — siempre deslizable en móvil */}
          {currentSlide.equations.length > 0 && (
            <div className="mt-4 md:mt-6 w-full overflow-x-auto">
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

      {/* ── Barra de Navegación ── */}
      <div
        className="
          flex flex-wrap items-center justify-between
          w-full mt-3 md:mt-6
          bg-white p-3 md:p-4
          rounded-lg shadow-sm border border-gray-200
          gap-2
        "
      >
        {/* Botón Anterior */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="
            px-3 py-2 md:px-4 md:py-2
            bg-blue-900 text-white
            text-sm md:text-base
            rounded-lg hover:bg-blue-800
            disabled:opacity-40 transition-colors
            flex items-center gap-1
          "
        >
          ← <span className="hidden sm:inline">Anterior</span>
        </button>

        {/* Contador — ocupa fila completa en móvil, inline en sm+ */}
        <span className="font-semibold text-blue-900 text-xs sm:text-sm md:text-base order-last sm:order-none w-full sm:w-auto text-center">
          Diapositiva {currentIndex + 1} / {presentation.slides.length}
        </span>

        {/* Botones Pantalla Completa + Siguiente */}
        <div className="flex gap-2">
          <button
            onClick={toggleFullscreen}
            title="Pantalla Completa"
            className="
              px-2 py-2 md:px-4 md:py-2
              bg-gray-100 text-gray-700
              text-sm rounded-lg
              hover:bg-gray-200 transition-colors
            "
          >
            <span className="hidden sm:inline">⛶ Pantalla Completa</span>
            <span className="sm:hidden">⛶</span>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === presentation.slides.length - 1}
            className="
              px-3 py-2 md:px-4 md:py-2
              bg-blue-900 text-white
              text-sm md:text-base
              rounded-lg hover:bg-blue-800
              disabled:opacity-40 transition-colors
              flex items-center gap-1
            "
          >
            <span className="hidden sm:inline">Siguiente</span> →
          </button>
        </div>
      </div>
    </div>
  );
}
