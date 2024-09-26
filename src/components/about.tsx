import { FunctionComponent, HTMLAttributes, ReactNode } from "react";
export interface AboutProps extends HTMLAttributes<HTMLLinkElement> {
  childern?: ReactNode;
}

export const About: FunctionComponent<AboutProps> = () => {
  return (
    <section className="pt-[100px]">
      <h1 className="top-heading-number">Aboout Me</h1>
      <div className="inner">
        <div className="about-inner-section">
          <div>
            <p>
              I am an experienced software developer with a strong background in{" "}
              <span className="text-text-green">
                HTML, CSS, JavaScript, Typescript and React.js
              </span>
              . I have a total of{" "}
              <span className="text-text-green">12 years</span> of professional
              experience, with over{" "}
              <span className="text-text-green">10 years</span> spent in
              software development. I have expertise in{" "}
              <span className="text-text-green">C#, Angular and React</span>,
              and a proven track record of delivering successful projects.
            </p>
            <p>
              In addition to my professional experience, I have also developed
              valuable skills and knowledge in
              <span className="text-text-green">
                Web3, Solidity, smart contracts, and the ETH Chain
              </span>{" "}
              in my free time.
            </p>
            <p>
              I am agile at transitioning between technologies, with experience
              moving from WinForms to UWP, React, and Angular. I have
              consistently demonstrated my ability to quickly adapt to new
              technologies and environments, and I am confident in my ability to
              learn and master new tools and platforms.
            </p>
          </div>
          <div></div>
        </div>
        <div className="about-inner-second-section">
          <div className="wrapper-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1663134281768-37fa467e9f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
