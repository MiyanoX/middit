import Search from "../../img/Search.svg";
import Korone from "../../img/Korone.svg";
import Refresh from "../../img/Refresh.svg"; 
import { SearchBar } from "../searchBar/SearchBar";
import "./Header.css";
import { useState } from "react";
import { clearCards, fetchRedditPopular } from "../cards/cardsSlice";
import { useDispatch } from "react-redux";

export const Header = () => {
    const [searchBarDisplay, setSearchBarDisplay] = useState(false);
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch();

    const handleRefreshClick = (e) => {
        dispatch(clearCards());
        dispatch(fetchRedditPopular())
    }

    return (
        <div  className="Header">
            <img src={Refresh} onClick={handleRefreshClick} id="refreshIcon"/>
            {searchBarDisplay ? <SearchBar value={inputValue} setInputValue={setInputValue}/>: <div><img src={Korone} id="koroneIcon"/><p id="title" >MiDDiT</p></div>}
            <img src={Search} onClick={() => setSearchBarDisplay(!searchBarDisplay)} id="searchIcon"/>
        </div>
    )
}