import { Card } from '../types/cardsInterfaces';

export const shuffleCards = (cards: string[]): Card[] => {
    return cards
        .concat(cards)
        .sort(() => Math.random() - 0.5)
        .map((src, index) => ({
            id: index,
            src,
            isFlipped: false,
            isMatched: false
        }));
};
