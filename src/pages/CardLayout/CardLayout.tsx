import { Card } from "../../types/cards";

interface CardProps {
    card: Card;
    handleChoice: (card: Card) => void;
    flipped: boolean;
    disabled: boolean;
}

export default function CardLayout({card, handleChoice, flipped, disabled}: CardProps) {
    const handledClick = () => {
        if(!disabled) {
            handleChoice(card);
        }
    }

    return (
        <div className="card">
            <div className={flipped ? 'flipped' : 'front'}>
                {
                    flipped ? (
                        <img 
                            className="front"
                            src={card.src} 
                            alt="card front" 
                        />
                    ) : (
                        <img
                            className="back" 
                            src="images/back.png" 
                            onClick={handledClick}
                            alt="card back" 
                        />
                    )
                }
            </div>
        </div>
    );
}