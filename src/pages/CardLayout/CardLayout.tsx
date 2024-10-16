import { CardProps } from "../../types/cardsInterfaces";

const Card: React.FC<CardProps> = ({ card, flipCard }) => {
  return (
    <div
      className="card"                    // Add a class for styling
      onClick={() => flipCard(card)}     // Call flipCard with the current card on click
      style={{ cursor: "pointer", width: "100px", height: "150px", border: "1px solid #ccc", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: card.isFlipped || card.isMatched ? "white" : "#eee" }}
    >
      {card.isFlipped || card.isMatched ? (
        <img src={card.src} alt={card.name} style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
      ) : (
        "?"                               // Show placeholder when not flipped
      )}
    </div>
  );
};

export default Card;