import { something } from "../services/posts";
import type { Action, ListenerEffectAPI } from "@reduxjs/toolkit";

import type { RootState, AppDispatch } from "../store";

export const incrementListener = {
  actionCreator: something,
  effect: (action: Action, listenerApi: ListenerEffectAPI<RootState, AppDispatch>) => {},
};
