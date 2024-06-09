// src/screens/Home.tsx
import React from "react";
import "./Home.css";

export type HomeScreenCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

interface HomeProps {
  data: HomeScreenCard[];
}

export const HomeScreen: React.FC<HomeProps> = ({ data }) => {
  return (
    <div className="Content">
      <h1>Home</h1>
      <p>Welcome to the Home Page. Here is some important information.</p>
      <div className="CardContainer">
        {data.map((item) => (
          <div key={item.id} className="Card">
            <img src={`./assets/${item.image}`} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
