import { CardBoardProps } from "../../types/cardsInterfaces";
import CardLayout from "../CardLayout/CardLayout";
import './CardBoard.css'; // Import the CSS file

const CardBoard: React.FC<CardBoardProps> = ({ cards, flipCard }) => {
  return (
    <div className="card-board">
      {cards.map(card => (
        <CardLayout
          key={card.id}
          card={card}
          flipCard={flipCard}
        />
      ))}
    </div>
  );
};

export default CardBoard;
