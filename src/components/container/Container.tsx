import { ContainerType } from "@/interfaces";
import React from "react";

interface IContainerProps {
  type?: ContainerType;
  children: React.ReactNode;
}

export function Container({
  type = ContainerType.BODY,
  children,
}: IContainerProps) {
  return (
    <div
      className={`mx-auto px-5 sm:px-0 ${
        type === ContainerType.BODY ? "max-w-[1010px]" : "max-w-[1018px]"
      }`}
    >
      {children}
    </div>
  );
}
