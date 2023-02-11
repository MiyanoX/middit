import Comment from "../../img/Comment.svg";
import Hide from "../../img/Hide.svg";

export const CardFunction = ({ commentNumber, hideCard, cardId}) => {
    const handleClick = async () => {
        await hideCard(cardId);
    }

    return (
        <div className="CardFunction">
            <img src={Comment} id="commentIcon"/>
            <p className="Comment">{commentNumber} comments</p>
            <img src={Hide} onClick={handleClick} id="hideIcon"/>
        </div>
    )
}