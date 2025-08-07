import React from "react";

import { ContainerType } from "@/enums";
import { Container } from "../container/Container";
import { Logo } from "../logo/Logo";
import { Nav } from "../nav/Nav";

export function Header() {
  return (
    <Container type={ContainerType.HEADER} className="mt-4 sm:mt-[35px]">
      <header className="grid grid-cols-3 sm:grid-cols-2 justify-center sm:justify-between items-center sm:items-start">
        {/* TODO: empty div for small screen to center the logo */}
        <div className="sm:hidden"></div>

        <Logo />

        <Nav />
      </header>
    </Container>
  );
}
