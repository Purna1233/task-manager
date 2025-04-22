import React from "react";

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return <div className="card">{text}</div>;
};

export default Card;