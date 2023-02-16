import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuDisplay, setMenuDisplay, selectScreenWidth } from "../searchBar/searchSlice";
import { v4 as uuidv4 } from 'uuid';
import { clearCards, fetchRedditData } from "../cards/cardsSlice";


const menuAnimation = (menuDisplay) => {
    if (menuDisplay) {
        return "slide-in";
    } else {
        return "slide-out";
    }
}

const initialMenuList = ["popular", "GlobalOffensive", "premier_league", "anime", "CryptoCurrency"]

export const Menu = () => {
    const menuDisplay = useSelector(selectMenuDisplay);
    const menuList = initialMenuList;
    const dispatch = useDispatch();
    const screenWidth= useSelector(selectScreenWidth);


    return (
        <div id="slider" className={`Menu ${menuAnimation(menuDisplay)}`} >
            <p id="menuTitle">Subreddit</p>
            <div id="menuList" >
                {menuList.map((topic) => 
                    <p id="topic" key={uuidv4()} onClick={() => {
                        dispatch(clearCards());
                        dispatch(fetchRedditData(topic)); 
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        if (screenWidth <= 1000) {
                            dispatch(setMenuDisplay());
                        }
                    }} >/r/{topic}</p>
                )}
            </div>
            
        </div>
    )
}