import { useState } from "react";

export default function CardLayout({card}: any) {
    let cardImg;
    const [theCard, setTheCard] = useState({
        id: card.id,
        cardName: card.name,
        cardImgUrl: card.img,
        flipped: false
    })

    if(!card) return (<h1 style={{color: 'red'}}> Error: No card! </h1>);

    if(theCard.flipped) {
        cardImg = <img 
            src={card.img} 
            className="card__face card__face--front" 
        />
    } else {
        cardImg = <img 
            src={card.img} 
            className="card__face card__face--back" 
        />
    }

    return (
        <div
            onClick={() => setTheCard(
                {
                    id: card.id,
                    cardName: card.name,
                    cardImgUrl: card.img,
                    flipped: true
                }
            )}
        >
            {cardImg}
        </div>
    )
}