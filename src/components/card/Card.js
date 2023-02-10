import { Vote } from "../vote/Vote";
import { CardFunction } from "../cardFunction/CardFunction";
import { CardContent } from "../cardContent/CardContent";
import './Card.css';

export const Card = () => {
    return (
        <div className="Card">
            <Vote />
            <CardContent />
            <CardFunction />
        </div>
    )
}