'use client';

import { useState } from "react";
import presentaciones from "../../data/presentaciones.json";
import { Sidebar } from "../../components/layout/Sidebar/Sidebar";
import dynamic from 'next/dynamic';
import { InfoPanel } from "../../components/dashboard/InfoPanel";

const PDFViewer = dynamic(
  () => import("../../components/dashboard/PDFViewer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

export default function MaterialesPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const selected = presentaciones.find((p) => p.id === selectedId);

  const handleSelect = (id: number) => {
    setSelectedId(id);
    setSidebarOpen(false); // cierra sidebar en móvil al seleccionar
  };

  return (
    <div className="flex flex-1 overflow-hidden h-[calc(100vh-4rem)] relative">

      {/* ── Overlay móvil ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ──
          Móvil: drawer deslizante (fixed, z-30)
          Desktop: columna normal (w-64 xl:w-72) */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-30 w-72 bg-white border-r border-gray-200 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:w-64 xl:w-72 md:z-auto md:flex-shrink-0
        `}
      >
        <Sidebar
          presentaciones={presentaciones}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      </aside>

      {/* ── Área principal ── */}
      <main className="flex flex-1 min-w-0 overflow-hidden bg-gray-50">

        {/* Botón hamburguesa — solo visible en móvil */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            fixed bottom-4 left-4 z-10
            md:hidden
            flex items-center gap-2
            bg-blue-900 text-white text-sm font-medium
            px-4 py-2 rounded-full shadow-lg
            hover:bg-blue-800 active:scale-95 transition-all
          "
        >
          ☰ Índice
        </button>

        {/* Visor (PDF o estado vacío) */}
        <div className="flex-1 min-w-0 overflow-y-auto">
          {selected ? (
            <PDFViewer selected={selected} onToggleFullscreen={() => {}} />
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-2 p-8 text-center">
              <span className="text-4xl">📄</span>
              <p className="text-sm md:text-base">
                Selecciona un material del índice para comenzar.
              </p>
              <button
                onClick={() => setSidebarOpen(true)}
                className="mt-2 md:hidden text-blue-900 underline text-sm"
              >
                Abrir índice
              </button>
            </div>
          )}
        </div>

        {/* Panel de info lateral — solo visible en pantallas lg+ */}
        {selected && (
          <aside className="hidden lg:block w-72 xl:w-80 flex-shrink-0 border-l border-gray-200 bg-white overflow-y-auto">
            <InfoPanel selected={selected} />
          </aside>
        )}
      </main>
    </div>
  );
}