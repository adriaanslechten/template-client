import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { EVENTS } from "../action/actionTypes";
import { getHomeDataFailure, getHomeDataSuccess } from "../action/home";
import { fetchData } from "@/constants/fixtures";

export const getHomeDataEpic = (action$: any) =>
  action$.pipe(
    ofType(EVENTS.GET_HOME_DATA),
    switchMap(() =>
      from(fetchData()).pipe(
        switchMap((data) => of(getHomeDataSuccess(data))),
        catchError((error) => of(getHomeDataFailure(error.message)))
      )
    )
  );
