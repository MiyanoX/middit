import { Card } from "../card/Card";
import "./Cards.css";
import { selectAllCards } from "./cardsSlice";
import { useDispatch, useSelector } from "react-redux";

export const Cards = () => {
    const cards = useSelector(selectAllCards);
    
    const cardToDisplay = () => {
        return Object.values(cards).filter((card) => card.display);
    }

    if (cards) {
        return (
            <div className="Cards">
                {cardToDisplay().map((card) =>  
                    <Card cardId={card.id} key={card.id}/>
                )}
            </div>
        )
    } else {
        console.log(cards);
        return (
            <div className="Cards">
                <p>No Contents</p>
            </div>
        )
    }
    
}