import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import useToggle from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  //const flipCard = () => {
  //  setIsFacingUp((isUp) => !isUp);
  //};
  const [isFacingUp, flipCard] = useToggle(true);
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
