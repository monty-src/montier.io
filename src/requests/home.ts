import { HYDRATE } from "next-redux-wrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Post, Posts } from "../posts";

export const HomeApi = createApi({
  reducerPath: "home",
  keepUnusedDataFor: 8,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getHome: builder.query<Posts, void>({
      query: () => `home`,
      transformResponse: (response: { data: Posts }) => response.data,
    }),
  }),
});

export const { useGetHomeQuery } = HomeApi;
