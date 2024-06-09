import { RootState } from "./store";

export const getHomeDataAsync = (state: RootState) => state.home.homeProfileAsync;

export const getHomeData = (state: RootState) => state.home.data;
