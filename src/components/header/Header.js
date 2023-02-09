import Search from "../../img/Search.svg";
import Korone from "../../img/Korone.svg";
import Refresh from "../../img/Refresh.svg"; 
import "./Header.css";

export const Header = () => {
    return (
        <div className="Header">
            <img src={Refresh} id="refreshIcon"/>
            <img src={Korone} id="koroneIcon"/>
            <p>Middit</p>
            <img src={Search} id="searchIcon"/>
        </div>
        
    )
}