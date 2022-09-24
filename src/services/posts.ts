import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Posts } from "../posts";
import { postsAdapter } from "../adapaters/posts";

export const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    something: (state) => state
  },
});

export const { something } = postsSlice.actions;

export default postsSlice.reducer;
