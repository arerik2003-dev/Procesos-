import React from 'react';

interface SidebarProps {
  categorias: string[];
  presentaciones: any[];
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ categorias, presentaciones, selectedId, setSelectedId }) => {
  return (
    <aside className=" bg-white border-r border-gray-200 p-8 overflow-y-auto sticky top-20 ">
      <h2 className="text-sm font-bold uppercase tracking-wider mb-6"
      style={{color:"#015cb8",textAlign:"center"
        ,margin:"1rem 0"
      }}>Índice de Temas</h2>
      
      <nav className="flex flex-col gap-8">
        {categorias.map((cat) => (
          <div key={cat} className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
              {cat}
            </p>
            <ul className="flex flex-col gap-2 pl-2 border-l-3 border-yellow-600">
              {presentaciones
                .filter((p) => p.category === cat)
                .map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => setSelectedId(p.id)}
                      className={`text-left w-full px-3 py-2.5 rounded-md transition-all duration-200 text-sm font-medium ${
                        selectedId === p.id
                          ? "bg-blue-50 text-blue-900 border-l-2 border-yellow-600 pl-2.5"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                      }`}
                    >
                      {p.titulo}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
