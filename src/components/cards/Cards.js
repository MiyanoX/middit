import { useEffect } from "react";
import { Card } from "../card/Card";
import { selectAllCards } from "./cardsSlice";
import { fetchRedditData } from "./cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectInputValue, selectScreenHeight } from "../searchBar/searchSlice";
import "./Cards.css";
import GoTop from "../goTop/goTop";

const cardToDisplay = (cards, inputValue) => {
    return Object.values(cards).filter((card) => card.display & card.title.toLowerCase().includes(inputValue.toLowerCase()));
}

export const Cards = () => {
    const cards = useSelector(selectAllCards);
    const inputValue = useSelector(selectInputValue);
    const displayHeight = useSelector(selectScreenHeight);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRedditData());
    }, [dispatch])

    if (Object.keys(cards).length !== 0) {
        return (
            <div className="Cards" >
                {cardToDisplay(cards, inputValue).map((card) =>  
                    <Card cardId={card.id} key={card.id}/>
                )}
                <GoTop />
            </div>
        )
    } else {
        return (
            <div id="loading" className="Cards" style={{height: displayHeight - 144}}>
                <p>Loading...</p>
            </div>
        )
    }
    
}