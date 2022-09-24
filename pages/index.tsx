import type { NextPage } from "next";

import "animate.css";

import Social from "../src/containers/Social";
import Headline from "../src/containers/Headline";
import PreviewPosts from "../src/containers/PreviewPosts";

const Home: NextPage = () => {
  return (
    <>
      <Headline />
      <Social />
      <PreviewPosts />
    </>
  );
};

export default Home;
