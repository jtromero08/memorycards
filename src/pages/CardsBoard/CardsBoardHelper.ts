import cards from '../../../cards.json';
// import { GameStructure } from '../../types/gameSructure';

export function cardGenerator() {
    const duplicationCard: any = [...cards,...cards];
    const shuffledCards = duplicationCard
        .sort(() => Math.random() - 0.5)
        .map((card: any) => ({
            ...card, 
            id: Math.random(),
            matched: false
        }))
    
    return shuffledCards;
}

export function handleChoice(card: any, firstChoice: any, setSecondChoice: any, setFirstChoice: any) {
    return firstChoice ? setSecondChoice(card) : setFirstChoice(card);
}