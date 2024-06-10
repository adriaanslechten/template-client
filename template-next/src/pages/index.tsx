// pages/home/index.tsx
import React, { useEffect } from "react";
import { Card, HomeScreen } from "./home/HomeScreen";
import { useHome } from "@/hooks/useHome";
import { fetchData } from "@/constants/fixtures";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  try {
    const data = await fetchData();
    return {
      props: { data },
      revalidate: 3600, // Page will be regenerated every 3600 seconds (1 hour) if there are requests
    };
  } catch (error) {
    let errorMessage = "An error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      props: {
        data: null,
        error: errorMessage,
      },
      revalidate: 3600,
    };
  }
};

interface HomePageProps {
  data: Card[];
  error?: string;
}

const HomeContainer: React.FC<HomePageProps> = ({ data, error }) => {
  const { data: clientData, homeProfileAsync, refreshData } = useHome(data);
  const router = useRouter();

  const handleCardClick = (titleSlug: string) => {
    router.push(`/${titleSlug}/quest`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshData(); // Periodically refresh data
    }, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [refreshData]);

  if (homeProfileAsync.state === "LOADING") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <HomeScreen data={clientData || data} handleCardClick={handleCardClick} />;
};

export default HomeContainer;
