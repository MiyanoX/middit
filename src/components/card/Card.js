import Up from "../../img/Up.svg";
import Down from "../../img/Down.svg";
import KoroneBig from "../../img/KoroneBig.PNG";
import './Card.css';

export const Card = () => {
    return (
        <div className="Card">
            <img src={Up} className="UpIcon" />
            <img src={Down} className="DownIcon" />
            <p className="Vote" >26.1k</p>
            <div className="ContentContainer">
                <p className="Channel">r/interestingasfuck •Posted by u/JarethKingofGoblins</p>
                <p className="Title">AMC Theaters to Change Movie Ticket Prices Based on Seat Location</p>
                <div className="ImageContainer">
                    <img src={KoroneBig} id="image"/>
                </div>
            </div>
        </div>
    )
}