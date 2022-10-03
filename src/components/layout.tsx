import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};
