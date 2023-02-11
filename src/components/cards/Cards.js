import { Card } from "../card/Card";
import KoroneBig from "../../img/KoroneBig.PNG";
import "./Cards.css";
import { useState } from "react";
import { selectAllCards } from "./cardsSlice";
import { useSelector } from "react-redux";

const randomNumber = Math.ceil(Math.random() * 10)
const initialCards = {};

const generateCard = (id) => ({
    id: id,
    display: true,
    animation: 'display',
    channel: "r/interestingasfuck •Posted by u/JarethKingofGoblins",
    title: "AMC Theaters to Change Movie Ticket Prices Based on Seat Location",
    image: KoroneBig,
    commentNumber: 2100,
    voteNumber: 3200,
})

for (let step = 1; step < randomNumber; step++) {
    const newCard = generateCard(step)
    initialCards[newCard.id] = newCard;
}

export const Cards = () => {
    const cards = useSelector(selectAllCards);

    const cardToDisplay = () => {
        return Object.values(cards).filter((card) => card.display);
    }

    return (
        <div className="Cards">
            {cardToDisplay().map((card) =>  
                <Card card={card} key={card.id}/>
            )}
        </div>
    )
}