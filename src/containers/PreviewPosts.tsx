import React from "react";

import styled from "styled-components";
import { AlignTextBoth, NotebookAndPen, Formula } from "@icon-park/react";

import { UnOrderedList, ListItemContent } from "../styles/basics";

import TitleBar from "../components/system.css/TitleBar";
import Separator from "../components/system.css/Separator";
import WindowPane from "../components/system.css/WindowPane";
import AnimateLoadingPosts from "../components/animation/AnimateLoadingPosts";
import AnimateFadeInDown from "../../src/components/animation/AnimateFadeInDown";

interface Post {
  id: number;
  attributes: {
    slug: string;
    body: string;
    title: string;
    post_type: string;
    updatedAt: string;
    createdAt: string;
    publicedAt: string;
  };
}

interface Props {
  posts: Post[];
}

const PreviewPosts = ({ posts }: Props) => {
  return (
    <AnimateFadeInDown delay={2}>
      <TitleBar text="Posts" />
      <Separator />
      <WindowPane>
        <UnOrderedList>
          {posts.map(({ attributes }, idx) => (
            <ListItemContent key={idx}>
              <a href="">
                <span>Post: </span> {attributes.title}
              </a>
            </ListItemContent>
          ))}
          <MoreContent>
            <a href="">More Posts</a>
          </MoreContent>
        </UnOrderedList>
        {/* <AnimateLoadingPosts /> */}
      </WindowPane>
    </AnimateFadeInDown>
  );
};

const MoreContent = styled(ListItemContent)`
  margin-top: 25px;
`;

export default PreviewPosts;
