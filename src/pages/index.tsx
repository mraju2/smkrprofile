import { Header } from "../components/header";
import { Lesson } from "../components/lesson";
import { FunctionComponent } from "react";
import { SocialMedia } from "../components/social-media";
import { Layout } from "../components/layout";

export const Index: FunctionComponent = () => {
  return (
    <>
      <Layout>
        <Header title="Journey">
          <SocialMedia></SocialMedia>
        </Header>
        <Lesson></Lesson>
      </Layout>
    </>
  );
};
export default Index;
