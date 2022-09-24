
import { createEntityAdapter } from "@reduxjs/toolkit";

import type { Post } from "../posts";

export const postsAdapter = createEntityAdapter<Post>({
  selectId: post => post.id
});