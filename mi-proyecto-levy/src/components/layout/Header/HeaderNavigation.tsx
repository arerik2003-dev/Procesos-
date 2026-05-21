"use client";

import { usePathname } from "next/navigation";
import BarNavigation from "../BarNavigation/BarNavigation";
import BarNavigationServicio from "../BarNavigation/BarNavigationServicio";

export default function HeaderNavigation({ role }: { role: number }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <>
        {role === 1 && <BarNavigation />}
      </>
    )
  }

  return (
    <>
      {role === 1 && <BarNavigation />}
      {role === 4 && <BarNavigation />}
      {role === 2 && <BarNavigationServicio />}
      {role === 3 && <BarNavigationServicio />}
    </>
  );
}