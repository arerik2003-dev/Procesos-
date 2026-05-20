import React from 'react';
import Card from './UI/Card';

interface WelcomeSectionProps {
  tarjetasInfomativas: { titulo: string, descripcion: string, icono: string }[];
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ tarjetasInfomativas }) => {
  return (
    <section className="mb-12">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Repositorio de Procesos Estocásticos
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-8">
        Plataforma académica especializada en la visualización, análisis y estudio de modelos estocásticos avanzados. 
        Este repositorio reúne material de investigación y educativo diseñado para facilitar la comprensión de procesos 
        aleatorios complejos, teoría de probabilidades y sus aplicaciones en ingeniería y matemáticas aplicadas.
      </p>
      
      {/* Línea decorativa */}
      <div className="w-20 h-1 bg-yellow-600 rounded mb-12"></div>

      {/* Tarjetas Informativas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tarjetasInfomativas.map((tarjeta, idx) => (
          <Card key={idx} shadow="sm" className="hover:shadow-md hover:border-blue-900 transition-all duration-200 p-6">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl font-bold">
                {tarjeta.icono}
              </span>
            </div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              {tarjeta.titulo}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {tarjeta.descripcion}
            </p>
          </Card>
        ))}
      </div>

      {/* Llamada a la acción */}
      <div className="mt-12 bg-blue-900 text-white rounded-lg p-8 text-center">
        <p className="text-lg font-medium mb-2">
          Selecciona un tema del menú para comenzar
        </p>
        <p className="text-blue-100">
          Explora nuestro completo catálogo de materiales sobre procesos estocásticos
        </p>
      </div>
    </section>
  );
};
