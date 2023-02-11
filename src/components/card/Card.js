import { Vote } from "../vote/Vote";
import { CardFunction } from "../cardFunction/CardFunction";
import { CardContent } from "../cardContent/CardContent";
import './Card.css';

export const Card = ({ card, hideCard }) => {
    return (
        <div className={`Card ${card.animation}`}>
            <Vote voteNumber={card.voteNumber}/>
            <CardContent channel={card.channel} title={card.title} image={card.image}/>
            <CardFunction commentNumber={card.commentNumber}  hideCard={hideCard} cardId={card.id}/>
        </div>
    )
}