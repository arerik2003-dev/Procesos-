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
  slides: Slide[]; // Assuming the JSON structure now contains an array of slides
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
        setError("No se pudieron cargar los materiales. Por favor, asegúrate de estar usando un servidor local (ej. Live Server) para evitar problemas de CORS.");
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

  if (loading) return <div className="p-8 text-center text-blue-900">Cargando material académico...</div>;
  if (error) return <div className="p-8 text-center text-red-600 bg-red-50 rounded-lg">{error}</div>;
  if (!presentation) return null;

  const currentSlide = presentation.slides[currentIndex];

  return (
    <div ref={viewerRef} className="flex flex-col items-center w-full max-w-4xl mx-auto bg-gray-50 p-6 rounded-2xl">
      {/* Slide Stage */}
      <div className="w-full aspect-[16/9] bg-white rounded-xl shadow-lg p-12 overflow-y-auto transition-opacity duration-500 ease-in-out border border-gray-100 flex flex-col justify-center">
        <article className="prose prose-slate max-w-none text-gray-800">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {currentSlide.content}
          </ReactMarkdown>
          <div className="mt-6">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {currentSlide.equations.map(eq => `$$${eq}$$`).join('

')}
            </ReactMarkdown>
          </div>
        </article>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center justify-between w-full mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50 transition-colors flex items-center gap-2"
        >
          ← Anterior
        </button>
        
        <span className="font-semibold text-blue-900">
          Diapositiva {currentIndex + 1} de {presentation.slides.length}
        </span>
        
        <div className="flex gap-2">
          <button 
            onClick={toggleFullscreen}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            ⛶ Pantalla Completa
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentIndex === presentation.slides.length - 1}
            className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50 transition-colors flex items-center gap-2"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}
