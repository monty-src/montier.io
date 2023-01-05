/**
 * containers/PreviewPost
 *
 *
 * @file containers/PreviewPost
 * @author montier@blackinfrastructure.com
 */
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AlignTextBoth, NotebookAndPen, Formula } from "@icon-park/react";
import { DocumentFolder } from "@icon-park/react";
import { UnOrderedList, ListItemContent } from "../styles/basics";

import { useAppDispatch, useAppSelector } from "../hooks";
import { useGetPostsQuery, postsApi } from "../requests/posts";

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
  const [currentPage, setCurrentPage] = useState(2);
  const [skipRequest, setSkipRequest] = useState(true);

  const { data, isLoading, isSuccess } = useGetPostsQuery(
    {
      page: currentPage,
      pageSize: 3,
    },
    {
      skip: skipRequest,
    }
  );

  console.log(data);

  return (
    <AnimateFadeInDown>
      <TitleBar text="Posts" />
      <Separator />
      <WindowPane>
        <UnOrderedList>
          <ListItemContent>
            <DocumentFolder theme="outline" size="20" fill="#333" />
            <Link href="/portfolio">Montier's Portfolio</Link>
          </ListItemContent>
          {posts.map(({ attributes }, idx) => (
            <ListItemContent key={idx}>
              <a href="">
                <span>Post: </span> {attributes.title}
              </a>
            </ListItemContent>
          ))}
          {isSuccess &&
            data.posts.map(({ attributes }, idx) => (
              <ListItemContent key={idx}>
                <a href="">
                  <span>Post: </span> {attributes.title}
                </a>
              </ListItemContent>
            ))}
          <MoreContent>
            {isLoading ? (
              <AnimateLoadingPosts />
            ) : (
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setSkipRequest(false);
                }}
              >
                More Posts
              </a>
            )}
          </MoreContent>
        </UnOrderedList>
      </WindowPane>
    </AnimateFadeInDown>
  );
};

const MoreContent = styled(ListItemContent)`
  margin-top: 25px;
`;

export default PreviewPosts;
