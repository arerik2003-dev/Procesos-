'use client';

'use client';

import { useState } from "react";
import presentaciones from "../../data/presentaciones.json";
import { Sidebar } from "../../components/layout/Sidebar/Sidebar";
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(
  () => import("../../components/dashboard/PDFViewer").then((mod) => mod.PDFViewer),
  { ssr: false }
);
import { InfoPanel } from "../../components/dashboard/InfoPanel";

export default function MaterialesPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = presentaciones.find((p) => p.id === selectedId);

  return (
      <div className="flex flex-1 overflow-hidden h-[calc(100vh-4rem)]">
        {/* Sidebar (3 columnas) */}
        <aside className="w-1/4 border-r border-gray-200 bg-white overflow-y-auto">
            <Sidebar presentaciones={presentaciones} selectedId={selectedId} onSelect={setSelectedId} />
        </aside>

        {/* Contenido (9 columnas) */}
        <main className="flex-1 bg-gray-50 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            {selected ? (
              <PDFViewer selected={selected} onToggleFullscreen={() => {}} />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                Selecciona un material de la izquierda.
              </div>
            )}
          </div>
          {selected && (
            <aside className="w-1/3 border-l border-gray-200 bg-white overflow-y-auto">
              <InfoPanel selected={selected} />
            </aside>
          )}
        </main>
      </div>
  );
}