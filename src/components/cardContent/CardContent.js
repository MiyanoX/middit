import { useSelector } from "react-redux"

const mediaContent = (card) => {
    switch(card.postHint) {
        case "hosted:video": {
            return (
                <video controls id="video">
                    <source src={card.videoLink.reddit_video.fallback_url} type="video/mp4"></source>
                </video>
            )
        }
        case "image": {
            return (
                <img src={card.contentLink} alt="cardImage" id="image"/>
            )
        }
        case "link": {
            return (
                <p id="link" ><a href={card.contentLink} target="_blank" rel="noreferrer">{`>>`}Source Link</a></p>
            )
        }
        default: {
            return (
                <div id="Nothing"></div>
            )
        }
    }
}

export const CardContent = ({cardId}) => {
    const card = useSelector(state => state.cards.cards[cardId])

    return (
        <div className="CardContent">
            <p className="Channel"><strong>{card.channel}</strong>&nbsp;&nbsp;•Posted by u/{card.authorName}</p>
            <p className="Title">{card.title}</p>
            <div className="MediaContainer">
                {mediaContent(card)}
            </div>
        </div>
    )
}