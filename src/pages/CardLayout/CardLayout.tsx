export default function CardLayout({flipCard, cardProps}: any) {
    let card = cardProps.state;
    let emptyAndFront = cardProps.eaf;

    if(!card) return (<h1 style={{color: 'red'}}> Error: No card! </h1>);

    return (
        <div
            onClick={() => flipCard(card.id)}
        >
            <img 
                src={emptyAndFront[0].front} 
                className="card__face card__face--front" 
            />
            <img 
                src={card.card.img} 
                className="card__face card__face--back" 
            />
        </div>
    )
}