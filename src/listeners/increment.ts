import { something } from "../services/posts";
import type { Action, ListenerEffectAPI } from "@reduxjs/toolkit";

import { store } from "../store";
import type { RootState, Dispatch } from "../store";

const makeStore = store();

export const incrementListener = {
  actionCreator: something,
  effect: (action: Action, listenerApi: ListenerEffectAPI<RootState, Dispatch>) => {},
};
