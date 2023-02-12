import Search from "../../img/Search.svg";
import Korone from "../../img/Korone.svg";
import Refresh from "../../img/Refresh.svg"; 
import { SearchBar } from "../searchBar/SearchBar";
import "./Header.css";
import { clearCards, fetchRedditPopular } from "../cards/cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchBarDisplay, setSearchBarDisplay } from "../searchBar/searchSlice";

export const Header = () => {
    const searchBarDisplay = useSelector(selectSearchBarDisplay);
    const dispatch = useDispatch();

    const handleRefreshClick = (e) => {
        dispatch(clearCards());
        dispatch(fetchRedditPopular())
    }

    const handleSearchClick = (e) => {
        dispatch(setSearchBarDisplay());
    }


    return (
        <div  className="Header">
            <img src={Refresh} onClick={handleRefreshClick} id="refreshIcon"/>
            {searchBarDisplay ? <SearchBar />: <div><img src={Korone} id="koroneIcon"/><p id="title" >MiDDiT</p></div>}
            <img src={Search} onClick={handleSearchClick} id="searchIcon"/>
        </div>
    )
}