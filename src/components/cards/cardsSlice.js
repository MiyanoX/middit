import { createSlice } from "@reduxjs/toolkit";
import KoroneBig from "../../img/KoroneBig.PNG";

const randomNumber = () => Math.ceil(Math.random() * 9 + 1);

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

const initialCards = () => {
    const cards = {};
    const count = randomNumber();
    for (let step = 1; step < count; step++) {
        const newCard = generateCard(step)
        cards[newCard.id] = newCard;
    }
    return cards
}


export const cardsSlice = createSlice({
    name: "cards",
    initialState: initialCards(),
    reducers: {
        setDisplayFalse: (state, action) => {
            state[action.payload].display = false;
        },
        setAnimationHide: (state, action) => {
            state[action.payload].animation = 'hide';
        },
        setNewCards: (state) => {
            Object.keys(state).forEach(key => delete state[key]);
            Object.assign(state, initialCards());
        }
    }
})

export const selectAllCards = state => state.cards;
export const { setAnimationHide, setDisplayFalse, setNewCards } = cardsSlice.actions;