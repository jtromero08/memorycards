import { useState } from "react";
import CardLayout from "../CardLayout/CardLayout";
import { cardGenerator } from "./CardBoardHelper";

let cards = cardGenerator();
console.log(cards)

export default function CardBoard() {
    const [score, setScore] = useState(0)
    return (
        <div>
            <h1>
                Score: <span id="result">{score}</span>
            </h1>
            <div>
                {
                    cards.map((card: any, index: any) => (
                        <CardLayout key={index} card={card}/>
                    ))
                }
            </div>
            <div>
                <button onClick={() => setScore(score+1)}>Push Me</button>
            </div>
        </div>
    )
}