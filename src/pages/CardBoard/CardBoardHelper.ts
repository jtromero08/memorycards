import cards from '../../../cards.json';
// import { GameStructure } from '../../types/gameSructure';

export function cardGenerator() {
    if(!cards) return; 
    
    let i: number = 0;
    let duplication: any = [...cards,...cards];
     
    // First I filter the card to check if is not filter or already
    // on the front. If so, It will not get push to the new
    // cards.filter((card: any) => {
    //      !card.front && !card.blank ?
    //      newCards.push(card) :
    //      gs.emptyAndFront
    // })

    // Since using and arrow function, I wrap the object in parenthese
    // so JS don't get confuse with the curly braces.
    return duplication.map((card: any) => ({
        id: i++,
        card: card.name,
        img: card.img,
        flipped: false
    }))
}