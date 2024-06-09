import { HomeScreenCard } from "../../screens/home/HomeScreen";
import { EVENTS } from "../action/actionTypes";
import { Action } from "../action/actionsCreators";
import { AsyncState } from "../types/types";

export interface AsyncIndicators<Err = unknown> {
  state: AsyncState;
  error?: Err;
}

export interface State {
  homeProfileAsync: AsyncIndicators;
  data: HomeScreenCard[];
}

export const initialState: State = {
  homeProfileAsync: {
    state: "INITIAL",
  },
  data: [],
};

const homeReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case EVENTS.GET_HOME_DATA: {
      return {
        ...state,
        homeProfileAsync: {
          state: "LOADING",
          error: undefined,
        },
      };
    }

    case EVENTS.GET_HOME_DATA_SUCCESS: {
      return {
        ...state,
        homeProfileAsync: {
          state: "SUCCESS",
          error: undefined,
        },
        data: action.payload,
      };
    }
    case EVENTS.GET_HOME_DATA_FAILURE: {
      return {
        ...state,
        homeProfileAsync: {
          state: "FAILURE",
          error: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
