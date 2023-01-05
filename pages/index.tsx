/**
 * pages/index
 *
 *
 * @file pages/index
 * @author montier@blackinfrastructure.com
 */
import React from "react";
import axios from "axios";
import type { NextPage } from "next";

import { wrapper } from "../src/store";

import Social from "../src/containers/Social";
import Headline from "../src/containers/Headline";
import PreviewPosts from "../src/containers/PreviewPosts";

import "animate.css";

/**
 * Home Component
 *
 *
 * @param props
 * @returns {}
 */
const Home: NextPage = (props: any) => {
  return (
    <>
      <Headline
        title={props.attributes.title}
        quote={props.attributes.quote}
        quote_author={props.attributes.quote_author}
      />
      <Social city={props.attributes.city} contact={props.attributes.contact} />
      <PreviewPosts posts={props.posts} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const responsePosts = await axios.get(
        `${process.env.API_BASE_URL}posts`,
        {
          params: {
            ["pagination[page]"]: 1,
            ["pagination[pageSize]"]: 3,
          },
        }
      );
      const responseHome = await axios.get(`${process.env.API_BASE_URL}home`, {
        params: {
          populate: "*",
        },
      });

      const { data: homeData } = responseHome?.data;
      const { data: postsData } = responsePosts?.data;

      return {
        props: {
          ...homeData,
          posts: postsData,
        },
      };
    }
);

export default Home;
