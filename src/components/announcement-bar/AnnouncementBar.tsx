import React from "react";

import { IAnnouncementBarProps } from "./AnnouncementBar.types";

export function AnnouncementBar({
  text,
  highlightText,
  icon,
  children,
}: IAnnouncementBarProps) {
  return (
    <div className="bg-[linear-gradient(to_right,#FC004E_0%,#10CBE0_100%)] p-5 md:py-2.5 text-center font-extrabold text-white md:text-[22px] leading-[100%]">
      {children ?? (
        <>
          {icon}
          <span className="text-secondary">{" " + highlightText + " "}</span>
          <span>{text}</span>
        </>
      )}
    </div>
  );
}
