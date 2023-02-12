import { Card } from "../card/Card";
import "./Cards.css";
import { selectAllCards } from "./cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRedditPopular } from "./cardsSlice";

export const Cards = () => {
    const cards = useSelector(selectAllCards);
    const dispatch = useDispatch();

    const cardToDisplay = () => {
        return Object.values(cards).filter((card) => card.display);
    }

    useEffect(() => {
        dispatch(fetchRedditPopular());
    }, [])

    if (Object.keys(cards).length !== 0) {
        return (
            <div className="Cards">
                {cardToDisplay().map((card) =>  
                    <Card cardId={card.id} key={card.id}/>
                )}
            </div>
        )
    } else {
        return (
            <div id="loading">
                <p>Loading...</p>
            </div>
        )
    }
    
}