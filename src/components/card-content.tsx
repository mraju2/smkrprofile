import { FunctionComponent, ReactNode } from "react";
import { clsx } from "clsx";

export interface CardContentProps {
  children: ReactNode;
  className: string;
}

export const CardContent: FunctionComponent<CardContentProps> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx(className)}>
      <div>{children}</div>
    </div>
  );
};
