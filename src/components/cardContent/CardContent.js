import { useSelector } from "react-redux"

export const CardContent = ({cardId}) => {
    const card = useSelector(state => state.cards.cards[cardId])

    return (
        <div className="CardContent">
            <p className="Channel">{card.channel} Posted by u/{card.authorName}</p>
            <p className="Title">{card.title}</p>
            <div className="ImageContainer">
                <img src={card.image} id="image"/>
            </div>
        </div>
    )
}