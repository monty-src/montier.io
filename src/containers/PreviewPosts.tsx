import React from "react";

import styled from "styled-components";
import { AlignTextBoth, NotebookAndPen, Formula } from "@icon-park/react";

import TitleBar from "../components/system.css/TitleBar";
import Separator from "../components/system.css/Separator";
import WindowPane from "../components/system.css/WindowPane";
import AnimateLoadingPosts from "../components/animation/AnimateLoadingPosts";
import AnimateFadeInDown from "../../src/components/animation/AnimateFadeInDown";

const PreviewPosts = () => {
  return (
    <AnimateFadeInDown delay={2}>
      <TitleBar text="Posts" />
      <Separator />
      <WindowPane>
        <UnOrderedList style={{ listStyle: "none", margin: "0 0 15px 0", padding: 0, }}>
          <ListItemContent>
            <AlignTextBoth theme="outline" size="20" fill="#333" />{" "}
            <a href="">
              <span>Post: </span>Working with Typescript
            </a>
          </ListItemContent>
          <ListItemContent>
            <AlignTextBoth theme="outline" size="20" fill="#333" />{" "}
            <a href="">
              <span>Post: </span>Redux Toolkit Different
            </a>
          </ListItemContent>
          <ListItemContent>
            <AlignTextBoth theme="outline" size="20" fill="#333" />{" "}
            <a href="">
              <span>Post: </span>AWS Codepipeline static site
            </a>
          </ListItemContent>
          <ListItemContent>
            <NotebookAndPen theme="outline" size="20" fill="#333" />{" "}
            <a href="">
              <span>Review: </span>Abstraction the key to copmuting
            </a>
          </ListItemContent>
          <ListItemContent>
            <Formula theme="outline" size="20" fill="#333" />{" "}
            <a href="">
              <span>Math: </span>Polynomials
            </a>
          </ListItemContent>
          <MoreContent>
            <a href="">
              More Posts
            </a>
          </MoreContent>
        </UnOrderedList>
        {/* <AnimateLoadingPosts /> */}
      </WindowPane>
    </AnimateFadeInDown>
  );
};

const UnOrderedList = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 14px;
  list-style: none;
`;

const ListItemContent = styled.li`
  column-gap: 10px;
  margin-top: 10px;
  line-height: 1.4;

  display: flex;
  align-items: center;
`;

const MoreContent = styled(ListItemContent)`
  margin-top: 25px;
`;

export default PreviewPosts;
