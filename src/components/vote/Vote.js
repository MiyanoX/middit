import Up from "../../img/Up.svg";
import Down from "../../img/Down.svg";

export const Vote = ({  voteNumber }) => {
    return (
        <div>
            <img src={Up} className="UpIcon" />
            <img src={Down} className="DownIcon" />
            <p className="Vote" >{voteNumber}</p>
        </div>
    )
}