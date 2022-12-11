import { Header } from "../components/header";
import { Lesson } from "../components/lesson";
import { FunctionComponent } from "react";
//import { SocialMedia } from "../components/social-media";
import { Layout } from "../components/layout";
import { NavBar } from "../components/navbar";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { MenuBar } from "../components/menu-bar";
import { About } from "../components/about";

export const Index: FunctionComponent = () => {
  return (
    <>
      <Layout>
        <Header title="Journey">
          <NavBar iconSvg={faGithub}>
            <MenuBar />
          </NavBar>
        </Header>
        <Lesson></Lesson>
        <About/>
      </Layout>
    </>
  );
};
export default Index;
