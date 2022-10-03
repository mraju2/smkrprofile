import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface LessonCardProps {
  description?: string;
  icon: IconProp;
  text?: string;
}

export const LessonCard: FunctionComponent<LessonCardProps> = ({
  description,
  icon,
  text,
}) => {
  return (
    <div className="h-60 w-60 bg-secondary rounded flex flex-col items-center">
      <div className="mt-10">
        <FontAwesomeIcon
          color="#B3B0BD"
          className="text-center"
          icon={icon}
          size="3x"
        />
      </div>
      <div className="text-white text-center">{text}</div>
      <div className="text-white">{description}</div>
    </div>
  );
};
