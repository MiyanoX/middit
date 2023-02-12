import { useEffect } from "react";
import { Card } from "../card/Card";
import { selectAllCards } from "./cardsSlice";
import { fetchRedditData } from "./cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectInputValue } from "../searchBar/searchSlice";
import "./Cards.css";

export const Cards = () => {
    const cards = useSelector(selectAllCards);
    const inputValue = useSelector(selectInputValue);
    const dispatch = useDispatch();

    const cardToDisplay = () => {
        return Object.values(cards).filter((card) => card.display & card.title.toLowerCase().includes(inputValue.toLowerCase()));
    }

    useEffect(() => {
        dispatch(fetchRedditData());
    }, [dispatch])

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