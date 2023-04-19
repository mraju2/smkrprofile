import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { MenuItem } from "./menu-item";
import { useRef } from "react";

export interface MenuBarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export const MenuBar: FunctionComponent<MenuBarProps> = ({ children }) => {
  const workRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    window.scrollTo({
      top: ref.current ? ref.current.offsetTop : 0,
      behavior: "smooth",
    });
    console.log(ref);
  };
  return (
    <div className="menubar">
      <ol className="menu-list text-white">
        <MenuItem onClick={() => scrollToRef(aboutRef)} title="About" />
        <MenuItem
          title="Experience"
          onClick={() => scrollToRef(experienceRef)}
        />
        <MenuItem title="Work" onClick={() => scrollToRef(workRef)} />
        <MenuItem title="Contact" onClick={() => scrollToRef(contactRef)} />
      </ol>
      <div>
        <a href="#" className="resume-button">
          Resume
        </a>
      </div>
      {children}
    </div>
  );
};
