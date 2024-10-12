import { useEffect, useState } from "react";
import CardLayout from "../CardLayout/CardLayout";
import { cardGenerator} from "./CardsBoardHelper";
import { Card } from "../../types/cards";

let cards = cardGenerator();
console.log(cards)

export default function CardBoard() {
    const [score, setScore] = useState(0)
    const [firstChoice, setFirstChoice] = useState<Card | null>(null)
    const [secondChoice, setSecondChoice] = useState<Card | null>(null)
    const [disabled, setDisabled] = useState(false)
    const [cards, setCards] = useState<Card[]>([])
    
    const handleChoiceCard = (card: any) => {
        firstChoice ? setSecondChoice(card) : setFirstChoice(card)
    }
    const resetTurnedCard = () => {
        setFirstChoice(null);
        setSecondChoice(null);
        setDisabled(false);
    }

    useEffect(() => {
        setCards(cardGenerator())
        setScore(0)
    }, [])

    useEffect(() => {
        if(firstChoice && secondChoice) {
            setDisabled(true); 
            if(firstChoice.src === secondChoice.src) {
                setCards(prevCards => 
                    prevCards.map(card => 
                        card.src === firstChoice.src ? {
                            ...card, matched: true
                        } : card
                    )
                );
                setScore(score + 1)
                resetTurnedCard();
            }
        } else {
            setTimeout(() => {
                resetTurnedCard();
            }, 1500);
        }
    }, [firstChoice, secondChoice])

    return (
        <div>
            <h1>
                Score: <span id="result">{score}</span>
            </h1>
            <div className="grid">
                {
                    cards.map((card: Card) => {
                        if(card.src !== "images/back.png") {
                            return (
                                <CardLayout 
                                    key={card.id}
                                    card={card}
                                    handleChoice={handleChoiceCard}
                                    flipped={!!(card === firstChoice || card === secondChoice || card.matched)}
                                    disabled={disabled}
                                />
                            )
                        }
                        return null;
                    })
                }
            </div>
        </div>
    )
}