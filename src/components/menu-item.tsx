import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
  childern?: ReactNode;
  disabled?: boolean;
  icon?: object;
  title: string;
  urlpath?: string;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({
  children,
  disabled,
  onClick,
  title,
  ...rest
}) => {
  const onClickFunc = disabled
    ? () => {
        /* Do nothing */
      }
    : onClick;
  return (
    <li role="menuitem" {...rest} className={"menu-item"}>
      <a onClick={onClickFunc}>{title}</a>
      {children}
    </li>
  );
};
