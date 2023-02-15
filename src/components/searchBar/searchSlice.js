import { createSlice } from "@reduxjs/toolkit";

const returnMenuDisplay = (width) => {
    if (width > 1000) {
        return true;
    } else {
        return false;
    }
}

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        screenSize: {
            width: window.innerWidth,
            height: window.innerHeight,
        },
        searchBarDisplay: false,
        inputValue: "",
        menuDisplay: returnMenuDisplay(window.innerWidth),
        menuContent: [],
    },
    reducers: {
        updateScreenSize: (state) => {
            state.screenSize.width = window.innerWidth;
            state.screenSize.height = window.innerHeight
        },
        setInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        setSearchBarDisplay: (state) => {
            state.searchBarDisplay = !state.searchBarDisplay;
        },
        setMenuDisplay: (state) => {
            state.menuDisplay = !state.menuDisplay;
        },
        updateMenuDisplay: (state) => {
            state.menuDisplay = returnMenuDisplay(state.screenSize.width)
        },
        addMenuContent: (state, action) => {
            state.menuContent.push(action.payload);
        },
        clearSearchBar: (state) => {
            state.inputValue = "";
        }
    }
})

export const selectSearchBarDisplay = state => state.search.searchBarDisplay;
export const selectInputValue = state => state.search.inputValue;
export const selectScreenWidth = state => state.search.screenSize.width;
export const selectScreenHeight = state => state.search.screenSize.height;
export const selectMenuDisplay = state => state.search.menuDisplay;
export const { updateScreenSize, setInputValue, setSearchBarDisplay, setMenuDisplay, clearSearchBar, updateMenuDisplay } =  searchSlice.actions;