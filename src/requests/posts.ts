import { HYDRATE } from 'next-redux-wrapper';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Post, Posts } from "../posts";

export const postsApi = createApi({
  reducerPath: "posts",
  keepUnusedDataFor: 8,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_BASE_URL }),
  tagTypes: ["Posts"],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getPost: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
      transformResponse: (response: { data: Post }) => response.data,
    }),
    getPosts: builder.query<Posts, void>({
      query: () => `posts`,
      transformResponse: (response: { data: Posts }) => response.data,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;
