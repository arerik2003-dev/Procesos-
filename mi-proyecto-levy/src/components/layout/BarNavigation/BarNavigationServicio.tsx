"use client";
import { useState } from "react";
import Link from "next/link";
import "./BarNavigation.css";

export default function BarNavigationServicio() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const toggleSubMenu = (index: number) => {
    if (typeof window !== "undefined" && window.innerWidth <= 1000) {
      setOpenSubMenu(openSubMenu === index ? null : index);
    }
  };

  const closeAllMenus = () => {
    setOpenMenu(false);
    setOpenSubMenu(null);
  };

  return (
    <nav className="barNavigation">
      <div className={`menuToggle ${openMenu ? "" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={openMenu ? "active" : ""}>
        <li className={`subMenu ${openSubMenu === 0 ? "open" : ""}`}>
          <span onClick={() => toggleSubMenu(0)}>Inscripciones</span>
          <ul onClick={toggleMenu}>
            <Link
              href="/Inscripcion"
              className="links"
              onClick={(e) => {
                e.stopPropagation();
                closeAllMenus();
              }}
            >
              <li>Inscripción Usuario</li>
            </Link>
            <Link
              href="/AgregarTiempo"
              className="links"
              onClick={(e) => {
                e.stopPropagation();
                closeAllMenus();
              }}
            >
              <li>Agregar Tiempo</li>
            </Link>
          </ul>
        </li>

        <li className={`subMenu ${openSubMenu === 1 ? "open" : ""}`}>
          <span onClick={() => toggleSubMenu(1)}>Servicios</span>
          <ul onClick={toggleMenu}>
            <Link
              href="/Impresiones"
              className="links"
              onClick={(e) => {
                e.stopPropagation();
                closeAllMenus();
              }}
            >
              <li>Impresiones y Ploteo</li>
            </Link>
            <Link
              href="/AsignacionMesas"
              className="links"
              onClick={(e) => {
                e.stopPropagation();
                closeAllMenus();
              }}
            >
              <li>Asignación de Mesas</li>
            </Link>
            <Link
              href="/AsignacionEquipo"
              className="links"
              onClick={(e) => {
                e.stopPropagation();
                closeAllMenus();
              }}
            >
              <li>Asignación de Equipos</li>
            </Link>
            <Link
              href="/Monitor"
              className="links"
              onClick={(e) => {
                e.stopPropagation();
                closeAllMenus();
              }}
            >
              <li>Monitor</li>
            </Link>
          </ul>
        </li>

        {/* <li className="subMenu" onClick={toggleMenu}>
          <Link
            href="/Mensajes"
            className="links"
            onClick={(e) => {
              e.stopPropagation();
              closeAllMenus();
            }}
          >
            <span>Mensajes</span>
          </Link>
        </li> */}

        <li className="subMenu" onClick={toggleMenu}>
          <Link
            href="/ActivosMantenimiento"
            className="links"
            onClick={(e) => {
              e.stopPropagation();
              closeAllMenus();
            }}
          >
            <span>Activos y en Mantenimiento</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
}
//IO
