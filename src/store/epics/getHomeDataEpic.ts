import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { getHomeData, getHomeDataFailure, getHomeDataSuccess } from "../action/home";

// src/services/api.ts
export const fetchData = async () => {
  // Simulate a data fetching operation
  return [
    {
      id: 1,
      title: "Design Process",
      description: "This is some descriptive text for the design process card. It contains information and looks nice.",
      image: "design_process.svg",
    },
    {
      id: 2,
      title: "Development",
      description:
        "This is some descriptive text for the development card. It contains additional information and looks equally nice.",
      image: "development.svg",
    },
  ];
};

export const getHomeDataEpic = (action$: any) =>
  action$.pipe(
    ofType(getHomeData),
    switchMap(() =>
      from(fetchData()).pipe(
        switchMap((data) => of(getHomeDataSuccess(data))),
        catchError((error) => of(getHomeDataFailure(error.message)))
      )
    )
  );
