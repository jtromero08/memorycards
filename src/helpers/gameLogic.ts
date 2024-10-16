import { Card } from '../types/cardsInterfaces';

// Function to flip a card
export const flipCard = (
    card: Card,
    flippedCards: Card[],
    setFlippedCards: (cards: Card[]) => void,
    setCards: (callback: (prevCards: Card[]) => Card[]) => void
) => {
    // Prevent flipping if already two cards are flipped, or if card is matched/already flipped
    if (flippedCards.length === 2 || card.isFlipped || card.isMatched) return;

    const newFlippedCards = [...flippedCards, { ...card, isFlipped: true }];
    setFlippedCards(newFlippedCards);

    // Update card state to show it as flipped
    setCards((prevCards) =>
        prevCards.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c))
    );
};

// Function to check if the two flipped cards match
export const checkMatch = (
    newFlippedCards: Card[],
    setCards: (callback: (prevCards: Card[]) => Card[]) => void,
    setFlippedCards: (cards: Card[]) => void,
    setMoves: (callback: (prevMoves: number) => number) => void,
    setDisabled: (disabled: boolean) => void
) => {
    const [firstCard, secondCard] = newFlippedCards;

    // Check if the cards match
    if (firstCard.src === secondCard.src) {
        // Update the cards to mark them as matched
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.src === firstCard.src ? { ...card, isMatched: true } : card
            )
        );
    } else {
        setDisabled(true); // Disable further clicks until timeout
        // Set a timeout to flip the cards back if they don't match
        setTimeout(() => {
            setCards((prevCards) =>
                prevCards.map((card) =>
                    card.id === firstCard.id || card.id === secondCard.id
                        ? { ...card, isFlipped: false }
                        : card
                )
            );
            setDisabled(false); // Re-enable clicking after timeout
        }, 1000); // 1 second delay for flipping back
    }

    setFlippedCards([]); // Clear the flipped cards array
    setMoves((prev) => prev + 1); // Increment move count
};

// Function to reset the game state
export const resetGame = (
    shuffleCards: () => Card[],
    setCards: (cards: Card[]) => void,
    setFlippedCards: (cards: Card[]) => void,
    setMoves: (moves: number) => void
) => {
    setCards(shuffleCards()); // Shuffle new cards
    setFlippedCards([]); // Clear flipped cards
    setMoves(0); // Reset moves
};
