import React from 'react';
import './sidebar.css';

interface SidebarProps {
  categorias: string[];
  presentaciones: any[];
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  categorias,
  presentaciones,
  selectedId,
  setSelectedId,
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Índice de Temas</h2>
        <div className="sidebar-line"></div>
      </div>

      <nav className="sidebar-nav">
        {categorias.map((cat) => (
          <div key={cat} className="category-block">
            <p className="category-title">{cat}</p>

            <ul className="presentation-list">
              {presentaciones
                .filter((p) => p.category === cat)
                .map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => setSelectedId(p.id)}
                      className={`presentation-btn ${
                        selectedId === p.id ? 'active' : ''
                      }`}
                    >
                      <span className="dot"></span>
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