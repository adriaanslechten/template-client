import React from "react";
import styles from "./Home.module.css";

type HomeScreenCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

interface HomeProps {
  data: HomeScreenCard[];
}

export const HomeScreen: React.FC<HomeProps> = ({ data }) => {
  const images = {
    "design_process.svg": "/assets/design_process.svg",
    "web_developer.svg": "/assets/web_developer.svg",
  };

  return (
    <div className={styles.Content}>
      <h1>Home</h1>
      <p>Welcome to the Home Page. Here is some important information.</p>
      <div className={styles.CardContainer}>
        {data.map((item) => (
          <div key={item.id} className={styles.Card}>
            <img src={images[item.image]} alt={item.title} className={styles.CardImage} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
