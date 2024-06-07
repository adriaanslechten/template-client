import React from "react";
import { HomeScreen } from "./HomeScreen";
import { useHome } from "../../hooks/useHome";

export const HomeContainer: React.FC = () => {
  const { data, loading, error } = useHome();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <HomeScreen data={data} />;
};
