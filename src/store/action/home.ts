import { EVENTS } from "./actionTypes";

export const getHomeData = () => ({
  type: EVENTS.GET_HOME_DATA,
});

export const getHomeDataSuccess = (data: any) => ({
  type: EVENTS.GET_HOME_DATA_SUCCESS,
  payload: data,
});

export const getHomeDataFailure = (error: string) => ({
  type: EVENTS.GET_HOME_DATA_FAILURE,
  payload: error,
});

export type HomeAction =
  | ReturnType<typeof getHomeData>
  | ReturnType<typeof getHomeDataSuccess>
  | ReturnType<typeof getHomeDataFailure>;
