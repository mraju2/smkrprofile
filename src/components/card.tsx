import { FunctionComponent, HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLElement>;

export const Card: FunctionComponent<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};
