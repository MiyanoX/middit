import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const randomNumber = () => Math.ceil(Math.random() * 9 + 1);

// const generateCard = (id) => ({
//     id: id,
//     display: true,
//     animation: 'display',
//     channel: "r/interestingasfuck •Posted by u/JarethKingofGoblins",
//     title: "AMC Theaters to Change Movie Ticket Prices Based on Seat Location",
//     image: KoroneBig,
//     commentNumber: 2100,
//     voteNumber: 3200,
// })

export const fetchRedditPopular = createAsyncThunk(
    "cards/fetchRedditPopular",
    async () => {
        const responseJson = await fetch('https://www.reddit.com/r/popular.json')
        .then(response => response.json())
    
        const elements = responseJson.data.children;
        const cardData = {}
        elements.map((element) => {
            const id = element.data.name
            cardData[id] = {
                id: id,
                display: true,
                animation: 'display',
                channel: element.data.subreddit_name_prefixed,
                authorName: element.data.author,
                title: element.data.title,
                commentNumber: element.data.num_comments,
                voteNumber: element.data.ups,
                image: element.data.url_overridden_by_dest,
            }
        })
        return cardData
    }
)


export const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {},
        isLoading: false,
        hasError: false,
    },
    reducers: {
        setDisplayFalse: (state, action) => {
            state.cards[action.payload].display = false;
        },
        setAnimationHide: (state, action) => {
            state.cards[action.payload].animation = 'hide';
        },
    },
    extraReducers: {
        [fetchRedditPopular.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchRedditPopular.fulfilled]: (state, action) => {
            state.cards = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchRedditPopular.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectAllCards = state => state.cards.cards;
export const { setAnimationHide, setDisplayFalse, setNewCards } = cardsSlice.actions;