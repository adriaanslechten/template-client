import React from "react";
import { HomeScreen } from "./HomeScreen";
import { useHome } from "../../hooks/useHome";

export const HomeContainer: React.FC = () => {
  const { data, homeProfileAsync } = useHome();

  if (homeProfileAsync.state === "LOADING") {
    return <div>Loading...</div>;
  }

  if (homeProfileAsync.error) {
    return <div>Error: </div>;
  }

  return <HomeScreen data={data} />;
};
