import React from "react";

interface IAnnouncementBarProps {
  text: string;
  highlightText?: string;
  icon?: React.ReactNode | string;
  children?: React.ReactNode;
}
export function AnnouncementBar({
  text,
  highlightText,
  icon,
  children,
}: IAnnouncementBarProps) {
  return (
    <div className="w-full bg-[linear-gradient(to_right,#FC004E_0%,#10CBE0_100%)] p-5 sm:py-2.5 text-center font-extrabold text-white sm:text-[22px]">
      {children ?? (
        <>
          {icon}
          <span className="text-secondary">{" " + highlightText + " "}</span>
          {text}
        </>
      )}
    </div>
  );
}
