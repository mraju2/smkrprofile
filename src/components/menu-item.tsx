import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
  childern?: ReactNode;
  disabled?: boolean;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({
  children,
  disabled,
  onClick,
  ...rest
}) => {
  const onClickFunc = disabled
    ? () => {
        /* Do nothing */
      }
    : onClick;
  return (
    <li onClick={onClickFunc} role="menuitem" {...rest}>
      {children}
    </li>
  );
};
