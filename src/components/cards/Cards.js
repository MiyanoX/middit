import { Card } from "../card/Card";
import KoroneBig from "../../img/KoroneBig.PNG";
import "./Cards.css";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

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

const sleep = (milliseconds=500) => new Promise(resolve => setTimeout(resolve, milliseconds))

export const Cards = () => {
    const [cards, setCards] = useState(initialCards); 

    const cardHideAnimation = (id) => {
        const newCards = {...cards};
        newCards[id].animation = 'hide';
        setCards(newCards);
    }

    const cardSetDisplayFalse = (id) => {
        const newCards = {...cards};
        newCards[id].display = false;
        setCards(newCards);
    }

    const hideCard = async (id) => {
        cardHideAnimation(id);
        await sleep(500);
        cardSetDisplayFalse(id);
        
    }

    const cardToDisplay = () => {
        return Object.values(cards).filter((card) => card.display);
    }

    return (
        <div className="Cards">
            {cardToDisplay().map((card) =>  
                <Card card={card} hideCard={hideCard} key={card.id}/>
            )}
        </div>
    )
}