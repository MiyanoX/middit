import { createSlice } from "@reduxjs/toolkit";
import KoroneBig from "../../img/KoroneBig.PNG";

const randomNumber = Math.ceil(Math.random() * 9 + 1)
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

export const cardsSlice = createSlice({
    name: "cards",
    initialState: initialCards,
    reducers: {
        setDisplayFalse: (state, action) => {
            state[action.payload].display = false;
        },
        setAnimationHide: (state, action) => {
            state[action.payload].animation = 'hide';
        }
    }
})

export const selectAllCards = state => state.cards;
export const { setAnimationHide, setDisplayFalse } = cardsSlice.actions;