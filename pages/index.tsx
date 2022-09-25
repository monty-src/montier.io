import React from "react";
import axios from "axios";
import type { NextPage } from "next";

import { wrapper } from "../src/store";

import Social from "../src/containers/Social";
import Headline from "../src/containers/Headline";
import PreviewPosts from "../src/containers/PreviewPosts";

import "animate.css";

const Home: NextPage = (props: any) => {
  return (
    <>
      <Headline
        title={props.attributes.title}
        quote={props.attributes.quote}
        quote_author={props.attributes.quote_author}
      />
      <Social 
        city={props.attributes.city} 
        contact={props.attributes.contact} 
      />
      <PreviewPosts />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const response = await axios.get(`${process.env.API_BASE_URL}home`, {
        params: {
          populate: "*",
        },
      });
      const { data } = response?.data;
      return { props: data };
    }
);

export default Home;
