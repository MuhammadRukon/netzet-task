import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { INavItems } from "./Nav.types";

export function Nav() {
  const navItems: INavItems[] = [
    { label: "About Us", href: "/" }, // TODO: change redirection path when page is created
    { label: "Contact", href: "/" }, // TODO: change redirection path when page is created
  ];
  return (
    <div className="justify-self-end">
      <Navbar navItems={navItems} />
      <Sidebar />
    </div>
  );
}
