import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  title?: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  return <header className="header">{children}</header>;
};
