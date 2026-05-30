import React from 'react';

interface DashboardLayoutProps {
  sidebar: React.ReactNode;
  main: React.ReactNode;
  infoPanel?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  sidebar, 
  main, 
  infoPanel 
}) => {
  return (
    <div className={`grid h-screen ${sidebar ? 'grid-cols-[280px_1fr_350px]' : 'grid-cols-1'} bg-gray-100 overflow-hidden`}>
      {/* Columna Izquierda: Sidebar */}
      {sidebar && (
        <aside className="border-r border-gray-200 bg-white overflow-y-auto">
          {sidebar}
        </aside>
      )}

      {/* Columna Central: Contenido Principal */}
      <main className="flex flex-col h-full overflow-hidden">
        {main}
      </main>

      {/* Columna Derecha: Panel de Información */}
      {infoPanel && (
        <aside className="border-l border-gray-200 bg-white overflow-y-auto">
          {infoPanel}
        </aside>
      )}
    </div>
  );
};
