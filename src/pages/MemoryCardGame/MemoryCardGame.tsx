// src/MemoryCardGame.tsx
import React, { useState, useEffect } from "react";
import CardBoard from "../CardsBoard/CardsBoard";
import { shuffleCards } from "./shuffleHelper";
import { flipCard, checkMatch, resetGame } from "./gameLogic";
import { Card } from "../../types/cardsInterfaces";
import cards from '../../../cards.json'

const CARD_IMAGES = cards.map((x: any) => x.src);

const MemoryCardGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);

  // Shuffle cards and reset the game when the component mounts
  useEffect(() => {
    resetGame(() => shuffleCards(CARD_IMAGES), setCards, setFlippedCards, setMoves);
  }, []);

  // Handle card selection
  const handleChoiceCard = (card: Card) => {
    flipCard(card, flippedCards, setFlippedCards, setCards);
  };

  // Check for a match when two cards are flipped
  useEffect(() => {
    if (flippedCards.length === 2) {
      checkMatch(flippedCards, setCards, setFlippedCards, setMoves);
    }
  }, [flippedCards]);

  // Reset the game when triggered
  const handleResetGame = () => {
    resetGame(() => shuffleCards(CARD_IMAGES), setCards, setFlippedCards, setMoves);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Memory Card Game</h1>
      <h2>Moves: {moves}</h2>
      <CardBoard cards={cards} flipCard={handleChoiceCard} />
      <button onClick={handleResetGame}>Restart Game</button>
    </div>
  );
};

export default MemoryCardGame;
