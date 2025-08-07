import React from "react";
import Link from "next/link";

import { INavbarProps } from "./Nav.types";

export function Navbar({ navItems }: INavbarProps) {
  return (
    <nav className="text-lg font-semibold text-[#a9a9a9] space-x-10 hidden sm:block">
      {navItems.map((item) => (
        <Link key={item.label} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
