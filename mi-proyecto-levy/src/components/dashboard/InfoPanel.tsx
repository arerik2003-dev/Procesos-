import React from 'react';
import { BookOpen, Key, Briefcase, Calendar } from 'lucide-react';
import { temas } from '../../data/temas'; // Importar el objeto temas

interface InfoPanelProps {
  selected: any;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ selected }) => {
  if (!selected) return <div className="p-6 text-gray-500 text-sm">Selecciona un tema para ver detalles.</div>;

  // Obtener el contexto del tema de 'temas.ts' usando la categoría
  const temaContexto = temas[selected.category] || {
    titulo: selected.category, // Fallback si no se encuentra en temas.ts
    definicionTeorica: "Información teórica no disponible para esta categoría.",
    conceptosClave: [],
    aplicacionPractica: "Aplicación práctica no disponible para esta categoría."
  };

  return (
    <div className="p-5 space-y-6 sticky top-4">
      <div className="bg-gray-50 p-5 rounded-r-xl border-l-4 border-[#BB8800] shadow-sm">
        
        {/* Título y Semestre */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-[#002B7A] text-lg">{selected.titulo}</h3>
            <span className="text-gray-600 text-xs">Autor: {selected.autor || 'Desconocido'}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Calendar size={16} />
            <span>{selected.fecha ? `Semestre ${selected.fecha.split('-')[0]}` : 'N/A'}</span>
          </div>
        </div>

        {/* Definición Teórica */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 text-[#002B7A]">
            <BookOpen size={18} />
            <h4 className="font-bold text-sm">Definición Teórica</h4>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {temaContexto.definicionTeorica}
          </p>
        </div>

        {/* Conceptos Clave */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 text-[#002B7A]">
            <Key size={18} />
            <h4 className="font-bold text-sm">Conceptos Clave</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {temaContexto.conceptosClave.map((c: string, i: number) => (
              <span key={i} className="bg-white border border-gray-200 text-xs px-2 py-1 rounded-full text-gray-600">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Aplicación Práctica */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-[#002B7A]">
            <Briefcase size={18} />
            <h4 className="font-bold text-sm">Aplicación Práctica</h4>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {temaContexto.aplicacionPractica}
          </p>
        </div>
      </div>

      {/* Recursos Adicionales */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
        <h4 className="font-bold text-[#002B7A] mb-3 text-sm">Recursos Adicionales</h4>
        <ul className="text-sm space-y-2">
          {selected.recursos?.map((recurso: any, index: number) => (
            <li key={index}>
              <a href={recurso.url} className="text-blue-600 hover:underline flex items-center gap-2">
                🔗 {recurso.titulo}
              </a>
            </li>
          )) || <li className="text-gray-500 text-xs">No hay recursos.</li>}
        </ul>
      </div>
      
      {/* Añadir placeholder para Visualizaciones Relacionadas */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
        <h4 className="font-bold text-[#002B7A] mb-3 text-sm">Visualizaciones Relacionadas</h4>
        <div className="grid grid-cols-1 gap-2">
            <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400 border">Simulación 1</div>
        </div>
      </div>
    </div>
  );
};