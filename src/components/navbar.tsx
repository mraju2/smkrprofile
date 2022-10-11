import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export interface NavBarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  iconSvg: object;
}

export const NavBar: FunctionComponent<NavBarProps> = ({
  children,
  iconSvg,
}) => {
  return (
    <nav className="navbar">
      <span>
        <FontAwesomeIcon icon={iconSvg} size="2x" color="white" />
      </span>
      {children}
    </nav>
  );
};
