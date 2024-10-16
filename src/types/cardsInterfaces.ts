export interface Card {
    id: number;
    src: string;
    isFlipped: boolean;
    isMatched: boolean;
    name?: string; // Optional name property
}

export interface CardBoardProps {
    cards: Card[];
    flipCard: (card: Card) => void;
}

export interface CardProps {
    card: Card;
    flipCard: (card: Card) => void;
}
