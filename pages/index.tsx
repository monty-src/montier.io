import React, { useEffect } from "react";
import type { NextPage } from "next";

import "animate.css";

import Social from "../src/containers/Social";
import Headline from "../src/containers/Headline";
import PreviewPosts from "../src/containers/PreviewPosts";

import { useGetHomeQuery } from "../src/requests/home";

const Home: NextPage = () => {
  const { data, isLoading } = useGetHomeQuery();

  return (
    <>
      <Headline />
      <Social />
      <PreviewPosts />
    </>
  );
};

export default Home;
