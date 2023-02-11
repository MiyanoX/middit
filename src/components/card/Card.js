import { Vote } from "../vote/Vote";
import { CardFunction } from "../cardFunction/CardFunction";
import { CardContent } from "../cardContent/CardContent";
import './Card.css';

export const Card = ({ card }) => {
    return (
        <div className={`Card ${card.animation}`}>
            <Vote voteNumber={card.voteNumber}/>
            <CardContent channel={card.channel} cardId={card.id} title={card.title} image={card.image}/>
            <CardFunction commentNumber={card.commentNumber} cardId={card.id}/>
        </div>
    )
}