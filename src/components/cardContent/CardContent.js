import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from 'react-markdown';
import { setTextDisplay } from "../cards/cardsSlice";

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

const readMore = (card, dispatch) => {
    if (card.text && card.text.length > 200) {
        return <p className="readMore" onClick={() => dispatch(setTextDisplay(card.id))} >{ card.textDisplay ? "Hide" : "Read More"}</p>
    }
}

export const CardContent = ({cardId}) => {
    const card = useSelector(state => state.cards.cards[cardId])
    const cardIntroMarkdown = card.textDisplay ? card.text : card.text.slice(0, 200) + "...";
    const dispatch = useDispatch();

    return (
        <div className="CardContent">
            <p className="Channel"><strong>{card.channel}</strong>&nbsp;&nbsp;•Posted by u/{card.authorName}</p>
            <p className="Title">{card.title}</p>
            <div className="MediaContainer">
                {mediaContent(card)}
            </div>
            <ReactMarkdown className="cardIntroMarkdown" >{cardIntroMarkdown === "..." ? "" : cardIntroMarkdown}</ReactMarkdown>
            {readMore(card, dispatch)}
        </div>
    )
}