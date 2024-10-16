export interface Card {
    id?: number;
    name?: string;
    src: string;
    isFlipped?: boolean;
    isMatched?: boolean;
}

export interface CardProps {
    card: Card;
    flipCard: (card: Card) => void;
}

export interface CardBoardProps {
    cards: Card[];
    flipCard: (card: Card) => void;
}