import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
  childern?: ReactNode;
  disabled?: boolean;
  icon?: object;
  title: string;
  urlpath: string;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({
  children,
  disabled,
  onClick,
  icon,
  title,
  urlpath,
  ...rest
}) => {
  const onClickFunc = disabled
    ? () => {
        /* Do nothing */
      }
    : onClick;
  return (
    <li onClick={onClickFunc} role="menuitem" {...rest} className={"menu-item"}>
      {icon && (
        <span>
          <FontAwesomeIcon icon={icon} color="white" />
        </span>
      )}
      <a href={urlpath}>{title}</a>
    </li>
  );
};
