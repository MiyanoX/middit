import Search from "../../img/Search.svg";
import Korone from "../../img/Korone.svg";
import Refresh from "../../img/Refresh.svg"; 
import { SearchBar } from "../searchBar/SearchBar";
import "./Header.css";
import { useState } from "react";

export const Header = () => {
    const [searchBarDisplay, setSearchBarDisplay] = useState(false);
    const [inputValue, setInputValue] = useState("")

    return (
        <div  className="Header">
            <img src={Refresh} onClick={() => window.location.reload(false)} id="refreshIcon"/>
            {searchBarDisplay ? <SearchBar value={inputValue} setInputValue={setInputValue}/>: <div><img src={Korone} id="koroneIcon"/><p id="title" >MiDDiT</p></div>}
            <img src={Search} onClick={() => setSearchBarDisplay(!searchBarDisplay)} id="searchIcon"/>
        </div>
    )
}