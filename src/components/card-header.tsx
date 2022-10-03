import { FunctionComponent, HTMLAttributes } from "react";

export interface CardHeaderProps extends HTMLAttributes<HTMLLinkElement> {
  text?: string;
}

export const CardHeader: FunctionComponent<CardHeaderProps> = ({ text }) => {
  return (
    <div className="card__header">
      <div className="card__title">{text}</div>
    </div>
  );
};
