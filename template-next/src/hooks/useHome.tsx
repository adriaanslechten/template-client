// hooks/useHome.tsx
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { State } from "../store/reducers/index";
import * as actions from "../store/action/actionsCreators";
import { Card } from "@/pages/home/HomeScreen";

export const useHome = (initialData?: Card[]) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: State) => state.home.data);
  const homeProfileAsync = useAppSelector((state: State) => state.home.homeProfileAsync);

  useEffect(() => {
    // Only dispatch the data fetch action if no initialData is provided
    if (!initialData) {
      dispatch(actions.getHomeData());
    }
  }, [dispatch, initialData]);

  const refreshData = () => {
    dispatch(actions.getHomeData());
  };
  const error = useAppSelector((state: State) => state.home.homeProfileAsync.error);

  return {
    data: initialData || data, // Prefer initialData if provided
    homeProfileAsync,
    refreshData,
    error,
  };
};
