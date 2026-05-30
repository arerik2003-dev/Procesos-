'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Inicio',     href: '/' },
  { label: 'Materiales', href: '/materiales' },
  { label: 'Contacto',   href: '#' },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `block py-2 px-3 rounded transition-all duration-200 text-sm font-medium uppercase tracking-wide
     ${pathname === href
       ? 'text-[#BB8800] border-b-2 border-[#BB8800]'
       : 'text-white hover:text-[#BB8800]'
     }`;

  return (
    <header className="w-full bg-[#002B7A] text-white shadow-lg border-b-4 border-[#BB8800] sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* ── Identidad institucional ── */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="bg-white p-1 rounded-sm flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#002B7A] flex items-center justify-center font-bold text-white text-[9px] sm:text-[10px]">
              UNAM
            </div>
          </div>
          <div className="leading-tight">
            <p className="font-bold text-xs sm:text-sm tracking-tight uppercase">FES Acatlán</p>
            <p className="text-[9px] sm:text-[10px] text-gray-300 uppercase hidden xs:block">
              Matemáticas Aplicadas y Computación
            </p>
          </div>
        </div>

        {/* ── Nav Desktop (≥ md) ── */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* ── Botón hamburguesa (< md) ── */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded focus:outline-none"
        >
          <span className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* ── Menú móvil desplegable ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 pb-4 bg-[#002B7A] border-t border-[#BB8800]/40 gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-2 px-3 rounded text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                pathname === l.href
                  ? 'text-[#BB8800] bg-white/10'
                  : 'text-white hover:text-[#BB8800] hover:bg-white/10'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};