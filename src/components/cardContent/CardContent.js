import KoroneBig from "../../img/KoroneBig.PNG";

export const CardContent = () => {
    return (
        <div className="CardContent">
            <p className="Channel">r/interestingasfuck •Posted by u/JarethKingofGoblins</p>
            <p className="Title">AMC Theaters to Change Movie Ticket Prices Based on Seat Location</p>
            <div className="ImageContainer">
                <img src={KoroneBig} id="image"/>
            </div>
        </div>
    )
}