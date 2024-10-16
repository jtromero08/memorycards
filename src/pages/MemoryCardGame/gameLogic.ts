import { Card } from '../../types/cardsInterfaces';

export const flipCard = (
    card: Card,
    flippedCards: Card[],
    setFlippedCards: (cards: Card[]) => void,
    setCards: (callback: (prevCards: Card[]) => Card[]) => void
) => {
    if (flippedCards.length === 2 || 
        card.isFlipped ||
        card.isMatched) return;
    
    const newFlippedCards = [...flippedCards, {...card, isFlipped: true}]
    setFlippedCards(newFlippedCards);

    setCards(prevCards =>
        prevCards.map(c => (
            c.id === card.id ? 
            {
                ...c, isFlipped: true
            } : c
        ))
    )
}

export const checkMatch = (
    newFlippedCards: Card[],
    setCards: (callback: (prevCards: Card[]) => Card[]) => void,
    setFlippedCards: (cards: Card[]) => void,
    setMoves: (callback: (prevMoves: number) => number) => void
) => {
    const [firstCard, secondCard] = newFlippedCards;
    if(firstCard.src === secondCard.src) {
        setCards(prevCards => 
            prevCards.map(card => 
                card.src === firstCard.src ? {
                    ...card,
                    isMatched: true
                } : card
            )
        )
    } else {
        setCards(prevCards => 
            prevCards.map(card => 
                card.id === firstCard.id ||
                card.id === secondCard.id
                ? { ...card, isFlipped: false}
                : card
            )
        )
    }

    setFlippedCards([]);
    setMoves(prev => prev + 1)
}

export const resetGame = (
    shuffleCards: () => Card[],
    setCards: (cards: Card[]) => void,
    setFlippedCards: (cards: Card[]) => void,
    setMoves: (moves: number) => void
) => {
    setCards(shuffleCards());  // Shuffle new cards
    setFlippedCards([]);       // Clear flipped cards
    setMoves(0);               // Reset moves
};