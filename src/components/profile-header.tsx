import { FunctionComponent } from "react";

export const ProfileHeader: FunctionComponent = () => {
  return (
    <section className="pt-[100px] pb-[100px]">
      <div className="profile">
        <p className="nameheader">Hi, my name is</p>
        <h2 className="big__heading">Manikanta Raju Somala.</h2>
        <h2 className="big__heading_sub">
          I write programs for better tomorrow.
        </h2>
        <p className="profile__description">
          I’m a software engineer specializing in building (and occasionally
          designing) digital experiences. Currently, I’m focused on building
          IIOT UI experience at{" "}
          <a
            className="text-text-green"
            href="http://www.toshiba-tsip.com/tsip/"
          >
            Toshiba
          </a>
          . For the past 10 years, I have worked for a Japanese company where
          quality is a fundamental mindset.
        </p>
      </div>
    </section>
  );
};
