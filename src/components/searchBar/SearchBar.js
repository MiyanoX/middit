import { useDispatch, useSelector } from "react-redux";
import Clear from "../../img/Clear.svg";
import { fetchRedditData } from "../cards/cardsSlice";
import "./SearchBar.css";
import { clearSearchBar, selectInputValue, setInputValue } from "./searchSlice";

export const SearchBar = () => {
    const inputValue = useSelector(selectInputValue);
    const dispatch = useDispatch();

    const handleInputValue = (e) => {
        dispatch(setInputValue(e.target.value));
    }

    const handleClear = (e) => {
        dispatch(clearSearchBar());
        dispatch(fetchRedditData(inputValue));
    }

    return (
        <div id="searchBar">
            <input id="searchInput" placeHolder="Input subreddit" value={inputValue} onChange={handleInputValue}/>
            <img src={Clear} alt="clear" id="clearIcon" onClick={handleClear}/>
        </div>
    )
}