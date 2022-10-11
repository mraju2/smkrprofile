import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { MenuItem } from "./menu-item";
export interface MenuBarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export const MenuBar: FunctionComponent<MenuBarProps> = ({ children }) => {
  return (
    <div className="menubar">
      <ol className="menu-list text-white">
        <MenuItem title="About" urlpath="#" />
        <MenuItem title="Experience" urlpath="#" />
        <MenuItem title="Work" urlpath="#" />
        <MenuItem title="Contact" urlpath="#" />
      </ol>
      <div>
        <a href="#" className="resume-button">
          Resume
        </a>
      </div>
    </div>
  );
};
