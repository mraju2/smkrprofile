import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { LessonCard } from "./lesson-card";
import {
  faPersonChalkboard,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

export interface LessonProps extends HTMLAttributes<HTMLLinkElement> {
  childern?: ReactNode;
}

export const Lesson: FunctionComponent<LessonProps> = () => {
  return (
    <>
      <div>
        <h2 className="text-white font-semibold	text-3xl pl-3">I belive in</h2>
        <h3 className="text-white font-semibold	text-xl pl-3">
          The rules i follow all the time to excel in the career
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <LessonCard
          description="Open to un learn and learn. Learning supports in adapability, innovation and increased capacity"
          icon={faLaptopCode}
          text="Continious Learning"
        ></LessonCard>
        <LessonCard
          description="Open to un learn and learn. Learning supports in adapability, innovation and increased capacity"
          icon={faPersonChalkboard}
          text="Teach"
        ></LessonCard>
        <LessonCard
          description="Open to un learn and learn. Learning supports in adapability, innovation and increased capacity"
          icon={faLaptopCode}
          text="Best practice"
        ></LessonCard>
        <LessonCard
          description="Open to un learn and learn. Learning supports in adapability, innovation and increased capacity"
          icon={faLaptopCode}
          text="Respect"
        ></LessonCard>
        <LessonCard
          description="Open to un learn and learn. Learning supports in adapability, innovation and increased capacity"
          icon={faPersonChalkboard}
          text="Be agile"
        ></LessonCard>
        <LessonCard
          description="Open to un learn and learn. Learning supports in adapability, innovation and increased capacity"
          icon={faLaptopCode}
          text="Fail fast"
        ></LessonCard>
      </div>
    </>
  );
};
