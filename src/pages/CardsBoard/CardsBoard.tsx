import { CardBoardProps } from "../../types/cardsInterfaces"
import Card from "../CardLayout/CardLayout";

const CardBoard: React.FC<CardBoardProps> = ({ cards, flipCard }) => {
    return (
        <div>
            {
                cards.map(card => 
                    <Card 
                        key={card.id} 
                        card={card} 
                        flipCard={flipCard}
                    />
                )
            }
        </div>
    )
}

export default CardBoard;