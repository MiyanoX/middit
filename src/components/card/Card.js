import { Vote } from "../vote/Vote";
import { CardFunction } from "../cardFunction/CardFunction";
import { CardContent } from "../cardContent/CardContent";
import { Comment } from "../comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { clearComments } from "../cards/cardsSlice";
import './Card.css';
import { sleep } from "../../util/sleep";


export const Card = ({ cardId }) => {
    const card = useSelector(state => state.cards.cards[cardId]);
    const dispatch = useDispatch();

    const handleClick = async() => {
        dispatch(clearComments(cardId));
        await sleep(100);
        const anchor = document.querySelector( "#card_" + cardId);
        console.log(anchor)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <div className={`Card ${card.animation}`} id={"card_" + cardId} >
            <Vote cardId={cardId}/>
            <CardContent cardId={cardId} />
            <CardFunction cardId={cardId} />
            { card.comments.length ? <div className="Comments" >
                <Comment comments={card.comments} />
                <p id="close" onClick={handleClick} >Close X</p>
            </div> : <div></div> }
            
        </div>
    )
}