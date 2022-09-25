import { createListenerMiddleware, addListener } from "@reduxjs/toolkit";
import type { TypedStartListening, TypedAddListener } from "@reduxjs/toolkit";

import type { RootState, Dispatch } from "../store";

export const listener = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, Dispatch>;

export const startAppListening =
  listener.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  Dispatch
>;
