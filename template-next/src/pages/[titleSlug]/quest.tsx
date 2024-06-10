import React from "react";
import { useRouter } from "next/router";

const QuestPage = () => {
  const router = useRouter();
  const { titleSlug } = router.query;

  return (
    <div>
      <h1>Quest for {titleSlug?.replace(/([a-z])([A-Z])/g, "$1 $2")}</h1>
      <p>More information about the quest will go here.</p>
    </div>
  );
};

export default QuestPage;
