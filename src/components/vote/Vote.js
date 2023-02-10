import Up from "../../img/Up.svg";
import Down from "../../img/Down.svg";

export const Vote = () => {
    return (
        <div>
            <img src={Up} className="UpIcon" />
            <img src={Down} className="DownIcon" />
            <p className="Vote" >26.1k</p>
        </div>
    )
}