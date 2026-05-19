"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./BarNavigation.css";
import Image from "next/image";

export default function BarNavigation() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const pathname = usePathname();

  const isActive = (paths: string[]) => {
    return paths.some((path) => pathname.startsWith(path));
  };

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

        <li
          className={`subMenu 
            ${openSubMenu === 0 ? "open" : ""}
            ${isActive(["/Inscripcion", "/AgregarTiempo"]) ? "active" : ""}
          `}>
          <span onClick={() => toggleSubMenu(0)}>
            <Image
              src="/user-plus.svg"
              alt="Logo FES"
              width={16}
              height={16}
              color="#545454"
            />
            Inscripciones</span>
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

        <li
          className={`subMenu
          ${isActive(["/base"]) ? "active" : ""}
          `}
          onClick={toggleMenu}>
          <Link
            href="/base"
            className="links"
            onClick={(e) => {
              e.stopPropagation();
              closeAllMenus();
            }}
          >
            <span>Base</span>
          </Link>
        </li>
        <li
          className={`subMenu
          ${isActive(["/ur"]) ? "active" : ""}
          `}
          onClick={toggleMenu}>
          <Link
            href="/ur"
            className="links"
            onClick={(e) => {
              e.stopPropagation();
              closeAllMenus();
            }}
          >
            <span>Ur</span>
          </Link>
        </li>
        <li
          className={`subMenu
          ${isActive(["/matriz"]) ? "active" : ""}
          `}
          onClick={toggleMenu}>
          <Link
            href="/matriz"
            className="links"
            onClick={(e) => {
              e.stopPropagation();
              closeAllMenus();
            }}
          >
            <span>Matriz</span>
          </Link>
        </li>
        <li
          className={`subMenu
          ${isActive(["/almacen"]) ? "active" : ""}
          `}
          onClick={toggleMenu}>
          <Link
            href="/almacen"
            className="links"
            onClick={(e) => {
              e.stopPropagation();
              closeAllMenus();
            }}
          >
            <span>Almacen</span>
          </Link>
        </li>
        <li
          className={`subMenu
          ${isActive(["/info-presupuesto"]) ? "active" : ""}
          `}
          onClick={toggleMenu}>
          <Link
            href="/info-presupuesto"
            className="links"
            onClick={(e) => {
              e.stopPropagation();
              closeAllMenus();
            }}
          >
            <span>Información Presupuestal</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
//IO
