import { Header } from "../components/header";
import { FunctionComponent } from "react";
//import { SocialMedia } from "../components/social-media";
import { Layout } from "../components/layout";
import { NavBar } from "../components/navbar";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { MenuBar } from "../components/menu-bar";
import { About } from "../components/about";
import { ProfileHeader } from "../components/profile-header";
import { Experience } from "../components/experience";

export const Index: FunctionComponent = () => {
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
            <ProfileHeader></ProfileHeader>
            <About></About>
            <Experience></Experience>
          </section>
          <div className="w-[30px]"></div>
        </div>
      </Layout>
    </>
  );
};
export default Index;
