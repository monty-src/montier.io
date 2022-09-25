import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { listener } from "./middlewares/listener";
import { serializableMiddleware } from "./middlewares/serializable";

import { homeApi } from "./requests/home";
import { postsApi } from "./requests/posts";

export const logger = createLogger({
  collapsed: true,
});

export const store = () => configureStore({
  devTools: process.env.NODE_ENV !== "production",

  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listener.middleware)
      .concat(serializableMiddleware, postsApi.middleware, homeApi.middleware),
});

const makeStore = store();

export type RootStore = ReturnType<typeof store>;
export type Dispatch = typeof makeStore.dispatch;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppDispatch = ReturnType<RootStore["dispatch"]>;

export const wrapper = createWrapper<RootStore>(store);