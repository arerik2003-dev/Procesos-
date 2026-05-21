'use client';

import { useState } from "react";
import presentaciones from "../../data/presentaciones.json";
import { Sidebar } from "../../components/layout/Sidebar/Sidebar";
import { WelcomeSection } from "../../components/WelcomeSection";
import { DetailView } from "../../components/detailview/DetailView";

const categorias = [
  "Ramificación",
  "Renovación",
  "Martingalas",
  "Cadenas de Markov",
  "Movimiento Browniano",
  "Fundamentos",
  "Procesos de Poisson"
];

const tarjetasInfomativas = [
  {
    titulo: "Material Interactivo",
    descripcion: "Accede a presentaciones, demostraciones y modelos estocásticos diseñados para facilitar el aprendizaje.",
    icono: "📊"
  },
  {
    titulo: "Modelos Matemáticos",
    descripcion: "Explora procesos como Browniano, Poisson, Cadenas de Markov y mucho más en detalle.",
    icono: "∫"
  },
  {
    titulo: "Fórmulas y Demostraciones",
    descripcion: "Consulta desarrollos formales, teoremas y demostraciones académicas de cada tema.",
    icono: "📐"
  }
];

export default function Page() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selected = presentaciones.find((p) => p.id === selectedId);

  return (
    <section className="flex flex-col bg-gray-50">
      {/* Header Institucional */}
      {/* <header className="bg-white border-b-2 border-blue-900 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">∑</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Procesos Estocásticos</h1>
              <p className="text-xs text-gray-600">FES Acatlán - UNAM</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-blue-900 transition-colors">
              Inicio
            </a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-blue-900 transition-colors">
              Materiales
            </a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-blue-900 transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </header> */}

      <div className="flex flex-1 w-full mx-auto">
        <Sidebar
          categorias={categorias}
          presentaciones={presentaciones}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        {/* Contenido Principal */}
        <section className="flex-1 p-8 overflow-y-auto" style={{margin:"2.5rem",display:"flex",justifyContent:"center"}}>
          {!selected ? (
            <WelcomeSection tarjetasInfomativas={tarjetasInfomativas} />
          ) : (
            <DetailView selected={selected} onBack={() => setSelectedId(null)} />
          )}
        </section>
      </div>
    </section>
  );
}