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

export const fetchRedditData = createAsyncThunk(
    "cards/fetchRedditPopular",
    async (channel="home", thunkAPI) => {
        const responseJson = await fetch(`https://www.reddit.com/r/${channel}.json`)
        .then(response => response.json())
    
        const elements = responseJson.data.children;
        const cardData = {}
        elements.forEach((element) => {
            const data = element.data
            const id = data.id
            cardData[id] = {
                id: id,
                display: true,
                animation: 'display',
                channel: data.subreddit_name_prefixed,
                authorName: data.author,
                title: data.title,
                commentNumber: data.num_comments,
                voteNumber: data.ups,
                contentLink: data.url_overridden_by_dest,
                postHint: data.post_hint, //post_hint  'hosted:video', image, link
                isVideo: data.is_video,
                videoLink: data.secure_media,
                permalink: data.permalink,
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
        clearCards: (state, action) => {
            state.cards = {};
        },
    },
    extraReducers: {
        [fetchRedditData.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchRedditData.fulfilled]: (state, action) => {
            state.cards = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchRedditData.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectAllCards = state => state.cards.cards;
export const { setAnimationHide, setDisplayFalse, clearCards } = cardsSlice.actions;