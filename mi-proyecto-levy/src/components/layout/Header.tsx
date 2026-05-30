import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="w-full bg-[#002B7A] text-white shadow-lg border-b-4 border-[#BB8800] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-2 items-center">
        
        {/* Izquierda: Identidad Institucional */}
        <div className="flex items-center gap-4">
          <div className="bg-white p-1 rounded-sm">
             {/* Aquí podrías insertar tu logo de la FES o UNAM */}
             <div className="w-10 h-10 bg-[#002B7A] flex items-center justify-center font-bold text-white text-[10px]">UNAM</div>
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-tight uppercase">FES Acatlán</h1>
            <p className="text-[10px] text-gray-300 uppercase">Matemáticas Aplicadas y Computación</p>
          </div>
        </div>



        {/* Derecha: Navegación */}
        <nav className="flex justify-end">
          <ul className="flex gap-8 text-sm font-medium uppercase tracking-wider">
            <li>
              <Link href="/" className="hover:text-[#BB8800] transition-all duration-300 py-6 border-b-2 border-transparent hover:border-[#BB8800]">Inicio</Link>
            </li>
            <li>
              <Link href="/materiales" className="hover:text-[#BB8800] transition-all duration-300 py-6 border-b-2 border-transparent hover:border-[#BB8800]">Materiales</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#BB8800] transition-all duration-300 py-6 border-b-2 border-transparent hover:border-[#BB8800]">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};