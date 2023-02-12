import { useSelector } from "react-redux"

export const CardContent = ({cardId}) => {
    const card = useSelector(state => state.cards.cards[cardId])

    const mediaContent = () => {
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
                    <img src={card.contentLink} id="image"/>
                )
            }
            case "link": {
                return (
                    <p id="link" ><a href={card.contentLink} target="_blank" >Source Link</a></p>
                )
            }
            default: {
                return (
                    <p id="Nothing"></p>
                )
            }
        }
    }

    return (
        <div className="CardContent">
            <p className="Channel"><strong>{card.channel}</strong>&nbsp;&nbsp;•Posted by u/{card.authorName}</p>
            <p className="Title">{card.title}</p>
            <div className="MediaContainer">
                {mediaContent()}
            </div>
        </div>
    )
}