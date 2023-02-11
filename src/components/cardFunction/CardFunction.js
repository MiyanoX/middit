import { useDispatch } from "react-redux";
import Comment from "../../img/Comment.svg";
import Hide from "../../img/Hide.svg";
import { setAnimationHide, setDisplayFalse } from "../cards/cardsSlice";

const sleep = (ms=500) => new Promise(resolve => setTimeout(resolve, ms))

export const CardFunction = ({ commentNumber, cardId}) => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        dispatch(setAnimationHide(cardId));
        await sleep(500);
        dispatch(setDisplayFalse(cardId));
    }

    return (
        <div className="CardFunction">
            <img src={Comment} id="commentIcon"/>
            <p className="Comment">{commentNumber} comments</p>
            <img src={Hide} onClick={handleClick} id="hideIcon"/>
        </div>
    )
}