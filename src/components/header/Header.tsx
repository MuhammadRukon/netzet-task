import React from "react";

import { ContainerType } from "@/enums";
import { Container } from "../container/Container";
import { Logo } from "../logo/Logo";
import { Nav } from "../nav/Nav";
import { AnnouncementBar } from "../announcement-bar/AnnouncementBar";

export function Header() {
  // NOTE: fetch content for announcement bar
  //       or extract the component and place it in an independent component e.g. Announcement.tsx
  const announcementBarContent = {
    icon: "🚀",
    highlightText: "FRESH BEGINNINGS SALE:",
    text: "Extra 25% OFF, Limited Spots - start your journey today!",
  };
  return (
    <div className="relative z-10">
      <AnnouncementBar
        icon={announcementBarContent.icon}
        highlightText={announcementBarContent.highlightText}
        text={announcementBarContent.text}
      />

      <Container type={ContainerType.HEADER} className="mt-4 sm:mt-[35px]">
        <header className="grid grid-cols-3 sm:grid-cols-2 justify-center sm:justify-between items-center sm:items-start">
          {/* TODO: empty div for small screen to center the logo */}
          <div className="sm:hidden"></div>

          <Logo />

          <Nav />
        </header>
      </Container>
    </div>
  );
}
