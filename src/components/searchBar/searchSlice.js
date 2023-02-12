import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchBarDisplay: false,
        inputValue: "",
    },
    reducers: {
        setInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        setSearchBarDisplay: (state) => {
            state.searchBarDisplay = !state.searchBarDisplay;
        },
        clearSearchBar: (state) => {
            state.inputValue = "";
        }
    }
})

export const selectSearchBarDisplay = state => state.search.searchBarDisplay;
export const selectInputValue = state => state.search.inputValue;
export const { setInputValue, setSearchBarDisplay, clearSearchBar } =  searchSlice.actions;