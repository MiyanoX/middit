import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRedditComments = createAsyncThunk(
    "comments/fetchRedditComments",
    async ({cardId, permalink}, thunkAPI) => {
        const responseJson = await fetch('https://www.reddit.com' + permalink + '.json')
        .then(response => response.json())
        const comment = responseJson[1].data.children; //[0].data.body => text .author ,is_submitter
        return {
            id: cardId,
            comment: comment
        }
    }
)

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: {},
        isLoading: false,
        hasError: false,
    },
    reducers: {
        clearComments: (state, action) => {
            delete state.comments[action.payload];
        },
    },
    extraReducers: {
        [fetchRedditComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchRedditComments.fulfilled]: (state, action) => {
            state.comments[action.payload.id] = action.payload.comment;
            state.isLoading = false;
            state.hasError = false;
        },
    }
})

export const selectAllComments = state => state.comments.comments;
export const { clearComments } = commentsSlice.actions;