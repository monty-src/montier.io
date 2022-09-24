import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import { listener } from "./middlewares/listener";
import { serializableMiddleware } from "./middlewares/serializable";

import { postsApi } from "./requests/posts";

export const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",

  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listener.middleware)
      .concat(logger, serializableMiddleware, postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
