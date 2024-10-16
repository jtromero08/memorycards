import React, { useState, useEffect } from "react";
import CardBoard from "../CardsBoard/CardBoard";
import { shuffleCards } from "../../helpers/shuffleHelper";
import { flipCard, checkMatch, resetGame } from "../../helpers/gameLogic";
import { Card } from "../../types/cardsInterfaces";
import cards from '../../../cards.json';
import './MemoryCardGame.css'; // Import the CSS file

const CARD_IMAGES = cards.map((x: any) => x.src);

const MemoryCardGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false); // Add this line

  // Shuffle cards and reset the game when the component mounts
  useEffect(() => {
    resetGame(() => shuffleCards(CARD_IMAGES), setCards, setFlippedCards, setMoves);
  }, []);

  // Handle card selection
  const handleChoiceCard = (card: Card) => {
    if (disabled) return; // Prevent clicking if disabled
    flipCard(card, flippedCards, setFlippedCards, setCards);
  };

  // Check for a match when two cards are flipped
  useEffect(() => {
    if (flippedCards.length === 2) {
      checkMatch(flippedCards, setCards, setFlippedCards, setMoves, setDisabled); // Pass setDisabled
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