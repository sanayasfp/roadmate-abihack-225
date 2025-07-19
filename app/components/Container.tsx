import { cn } from "@/lib/utils";
import React from "react";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export function Container({ children, className, ...props }: Props) {
  return (
    <div
      className={cn("container mx-auto px-4 max-w-4xl", className)}
      {...props}
    >
      {children}
    </div>
  );
}
