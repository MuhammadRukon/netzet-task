import React from "react";
import { Container } from "../container/Container";
import { ContainerType } from "@/interfaces";

export function Navbar() {
  return (
    <Container type={ContainerType.NAVBAR}>
      <nav className="flex justify-between items-center">
        <span>Logo</span>
        <span>Navbar</span>
      </nav>
    </Container>
  );
}
