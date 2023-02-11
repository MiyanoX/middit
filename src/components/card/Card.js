import { Vote } from "../vote/Vote";
import { CardFunction } from "../cardFunction/CardFunction";
import { CardContent } from "../cardContent/CardContent";
import { useSelector } from "react-redux";
import './Card.css';

export const Card = ({ cardId }) => {
    const card = useSelector(state => state.cards.cards[cardId]);

    return (
        <div className={`Card ${card.animation}`}>
            <Vote cardId={cardId}/>
            <CardContent cardId={cardId} />
            <CardFunction cardId={cardId}/>
        </div>
    )
}