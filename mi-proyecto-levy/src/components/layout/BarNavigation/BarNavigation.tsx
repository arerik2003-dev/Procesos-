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
          ${isActive(["/"]) ? "active" : ""}
          `}
          onClick={toggleMenu}>
          <Link
            href="/"
            className="links"
            onClick={(e) => {
              e.stopPropagation();
              closeAllMenus();
            }}
          >
            <span>Inicio</span>
          </Link>
        </li>

        <li
          className={`subMenu
          ${isActive(["/materiales"]) ? "active" : ""}
          `}
          onClick={toggleMenu}>
          <Link
            href="/materiales"
            className="links"
            onClick={(e) => {
              e.stopPropagation();
              closeAllMenus();
            }}
          >
            <span>Materiales</span>
          </Link>
        </li>

        <li
          className={`subMenu
          ${isActive(["/contacto"]) ? "active" : ""}
          `}
          onClick={toggleMenu}>
          <Link
            href="/contacto"
            className="links"
            onClick={(e) => {
              e.stopPropagation();
              closeAllMenus();
            }}
          >
            <span>Contacto</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
}
//IO
