import Search from "../../img/Search.svg";
import Korone from "../../img/Korone.svg";
// import Refresh from "../../img/Refresh.svg"; 
import Menu from "../../img/Menu.svg"
import { SearchBar } from "../searchBar/SearchBar";
import "./Header.css";
import { clearCards, fetchRedditData } from "../cards/cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchBarDisplay, setMenuDisplay, setSearchBarDisplay} from "../searchBar/searchSlice";

export const Header = () => {
    const searchBarDisplay = useSelector(selectSearchBarDisplay);
    const dispatch = useDispatch();

    const handleRefreshClick = (e) => {
        dispatch(clearCards());
        dispatch(fetchRedditData())
    }

    const handleSearchClick = (e) => {
        dispatch(setSearchBarDisplay());
    }

    const handleMenuClick = (e) => {
        dispatch(setMenuDisplay());
    }


    return (
        <div  className="Header">
            {/* <img src={Refresh} alt="refresh" id="refreshIcon"/> */}
            <img src={Menu} alt="menu" id="menuIcon" onClick={handleMenuClick} />
            {searchBarDisplay ? <SearchBar />: <div><img src={Korone} alt="korone" onClick={handleRefreshClick} id="koroneIcon"/><p  onClick={handleRefreshClick} id="title" >MiDDiT</p></div>}
            <img src={Search} alt="search" onClick={handleSearchClick} id="searchIcon"/>
        </div>
    )
}