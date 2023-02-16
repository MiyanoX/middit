import { useDispatch } from "react-redux";
import Comment from "../../img/Comment.svg";
import Hide from "../../img/Hide.svg";
import { setAnimationHide, setDisplayFalse } from "../cards/cardsSlice";
import { useSelector } from "react-redux";
import { nFormatter } from "../../util/numberTransform";
import { fetchRedditComments } from "../comment/commentsSlice";

const sleep = (ms=500) => new Promise(resolve => setTimeout(resolve, ms))

export const CardFunction = ({cardId}) => {
    const card = useSelector(state => state.cards.cards[cardId])
    const dispatch = useDispatch();
    
    const handleClick = async () => {
        dispatch(setAnimationHide(cardId));
        await sleep(500);
        dispatch(setDisplayFalse(cardId));
    }

    return (
        <div className="CardFunction">
            <img src={Comment} alt="comment" id="commentIcon" onClick={() => dispatch(fetchRedditComments({cardId: cardId, permalink: card.permalink}))} />
            <p className="CommentNumber">{nFormatter(card.commentNumber, 1)} comments</p>
            <img src={Hide} alt="hide" onClick={handleClick} id="hideIcon"/>
        </div>
    )
}