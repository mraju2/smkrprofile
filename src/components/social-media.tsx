import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import {
  faGithub,
  faLinkedinIn,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

export const SocialMedia: FunctionComponent = () => {
  return (
    <div className="flex justify-between">
      <a href="https://github.com/mraju2" className="mr-4">
        <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
      </a>
      <a href="/about" className="mr-4">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white" />
      </a>
      <a href="/about" className="mr-4">
        <FontAwesomeIcon icon={faMedium} size="2x" color="white" />
      </a>
    </div>
  );
};
