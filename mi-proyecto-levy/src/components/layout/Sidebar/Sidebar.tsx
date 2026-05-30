import React from 'react';
import { BookOpen, GitBranch, RefreshCw, TrendingUp, Network, Waves, Clock, Activity } from 'lucide-react';

interface SidebarProps {
  presentaciones: any[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

const iconMap: Record<string, React.ElementType> = {
  'Fundamentos': BookOpen,
  'Ramificación': GitBranch,
  'Renovación': RefreshCw,
  'Martingalas': TrendingUp,
  'Cadenas de Markov': Network,
  'Movimiento Browniano': Waves,
  'Teoría de Colas': Clock,
  'Procesos Epidemiológicos': Activity
};

export const Sidebar: React.FC<SidebarProps> = ({ presentaciones, selectedId, onSelect }) => {
  const categorias = Object.keys(iconMap);

  return (
    <div className="p-4 space-y-4">
      <div className="font-bold text-[#002B7A] uppercase tracking-wider text-xs mb-4">Índice</div>
      {categorias.map(cat => {
        const Icon = iconMap[cat];
        const items = presentaciones.filter(p => p.category === cat);
        
        return (
          <div key={cat} className="space-y-1">
            <div className="flex items-center gap-3 p-2 text-[#002B7A] font-semibold">
              <Icon size={20} />
              <span className="text-sm">{cat}</span>
            </div>
            <div className="pl-8 space-y-1">
              {items.map(p => (
                <button 
                  key={p.id}
                  onClick={() => onSelect(p.id)}
                  className={`w-full text-left p-2 text-sm rounded transition-colors ${selectedId === p.id ? 'bg-[#002B7A]/10 text-[#002B7A] font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  {p.titulo}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
