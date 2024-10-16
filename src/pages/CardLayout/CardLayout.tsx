import { CardProps } from "../../types/cardsInterfaces";
import './CardLayout.css'; // Import the CSS file

const Card: React.FC<CardProps> = ({ card, flipCard }) => {
  return (
    <div className="card" onClick={() => flipCard(card)}>
      <div className={`card-inner ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}>
        <div className="card-front">
          ?
        </div>
        <div className="card-back">
          <img src={card.src} alt={card.name} style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
