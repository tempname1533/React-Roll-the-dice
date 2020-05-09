import React, { useState } from "react";
import Die from "./Die";
import "./Rolldice.css";

const RollDice = () => {
  const [dice, setDice] = useState("one");
  const [dice2, setDice2] = useState("two");
  const [isRolling, setRolling] = useState(false);

  const slides = ["one", "two", "three", "four", "five", "six"];

  const roll = e => {
    e.preventDefault();
    const newDive1 = slides[Math.floor(Math.random() * slides.length)];
    const newDive2 = slides[Math.floor(Math.random() * slides.length)];

    console.log(newDive1, newDive2);
    setDice(newDive1);
    setDice2(newDive2);
    setRolling(!false);
    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Die face={dice} rolling={isRolling} />
        <Die face={dice2} rolling={isRolling} />
      </div>
      <button onClick={roll} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll Dice!"}
      </button>
    </div>
  );
};

export default RollDice;
