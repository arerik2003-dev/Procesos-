'use client';

import { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface SlideViewerProps {
  slides: string[]; // Array of markdown strings
  title: string;
}

export default function SlideViewer({ slides, title }: SlideViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      {/* Slide Stage */}
      <div className="w-full aspect-[16/9] bg-white rounded-xl shadow-lg p-12 overflow-y-auto transition-all duration-300 ease-in-out border border-gray-100">
        <article className="prose prose-slate max-w-none text-gray-800">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {slides[currentIndex]}
          </ReactMarkdown>
        </article>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center justify-between w-full mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 disabled:opacity-50"
        >
          Anterior
        </button>
        
        <span className="font-medium text-gray-700">
          Diapositiva {currentIndex + 1} de {slides.length}
        </span>
        
        <button 
          onClick={nextSlide}
          disabled={currentIndex === slides.length - 1}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
