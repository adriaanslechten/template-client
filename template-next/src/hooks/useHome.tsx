import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { State } from "../store/reducers/index";
import * as actions from "../store/action/actionsCreators";

export const useHome = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state: State) => state.home.data);
  const homeProfileAsync = useAppSelector((state: State) => state.home.homeProfileAsync);

  useEffect(() => {
    dispatch(actions.getHomeData());
  }, [dispatch]);

  return { data, homeProfileAsync };
};
