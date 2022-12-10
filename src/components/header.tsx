import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  title?: string;
}

<<<<<<< HEAD
export const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  return <header className="header">{children}</header>;
=======
export const Header: FunctionComponent<HeaderProps> = ({ children, title }) => {
  return (
    <header className="header">
      {children}
    </header>
  );
>>>>>>> 5c59fa9 (Merge changes)
};
