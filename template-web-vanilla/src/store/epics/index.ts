import { combineEpics } from "redux-observable";
import { getHomeDataEpic } from "./getHomeDataEpic";

export const rootEpic = combineEpics(getHomeDataEpic);
