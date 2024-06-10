// HomeScreen component
import React from "react";
import styles from "./Home.module.css";
import Card from "@/components/Card";
import Chip from "@/components/Chip";

type Stat = {
  label: string;
  value: string;
};

export type CardData = {
  title: string;
  description: string;
  link: string;
  stats: Stat[];
};

interface HomeProps {
  data?: CardData[];
  handleCardClick: (title: string) => void;
}

export const HomeScreen: React.FC<HomeProps> = ({ data, handleCardClick }) => {
  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div className={styles.Content}>
      <h1>Home</h1>
      <div className={styles.CardContainer}>
        {data.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            onClick={() => handleCardClick(card.title.replace(/\s+/g, ""))}
            onButtonClick={() => window.open(card.link, "_blank")}
          >
            <div>
              {card.stats.map((stat, index) => (
                <Chip key={index} label={stat.label} value={stat.value} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
