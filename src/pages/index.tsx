import { Header } from "../components/header";
import { FunctionComponent } from "react";
import { Layout } from "../components/layout";
import { NavBar } from "../components/navbar";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { MenuBar } from "../components/menu-bar";
import { About } from "../components/about";
import { ProfileHeader } from "../components/profile-header";
import { Experience } from "../components/experience";
import { useEffect, useRef } from "react";

export const Index: FunctionComponent = () => {
  const headerRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <Header title="Journey">
          <NavBar iconSvg={faGithub}>
            <MenuBar />
          </NavBar>
        </Header>
        <div className="flex justify-between items-start">
          <div className="w-[30px]"></div>
          <section className="pt-[100px] pb-[100px] pl-[100px] pr-[100px]">
            <section ref={headerRef}>
              <ProfileHeader></ProfileHeader>
            </section>
            <section ref={aboutRef}>
              <About></About>
            </section>
            <section ref={experienceRef}>
              <Experience></Experience>
            </section>
          </section>
          <div className="w-[30px]"></div>
        </div>
      </Layout>
    </>
  );
};
export default Index;
