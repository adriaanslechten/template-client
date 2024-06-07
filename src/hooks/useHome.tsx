import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { State } from "../store/reducers/index";

export const useHome = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state: State) => state.home.data);
  const loading = useAppSelector((state: State) => state.home.loading);
  const error = useAppSelector((state: State) => state.home.error);

  useEffect(() => {
    dispatch(getHomeDataStart());
  }, [dispatch]);

  return { data, loading, error };
};
