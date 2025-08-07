import React from "react";

import { ContainerType } from "@/enums";

interface IContainerProps {
  type?: ContainerType;
  children: React.ReactNode;
  className?: string;
}

export function Container({
  type = ContainerType.BODY,
  className,
  children,
}: IContainerProps) {
  return (
    <div
      className={`mx-auto px-5 ${
        type === ContainerType.BODY
          ? "max-w-[calc(1010px+40px)]"
          : "max-w-[calc(1018px+40px)]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
