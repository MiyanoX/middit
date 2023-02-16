import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch, useSelector } from "react-redux";
import "./Comment.css";
import { clearComments } from "./commentsSlice";

export const Comment = ({cardId}) => {
    const comments = useSelector(state => state.comments.comments[cardId]);
    const isLoading = useSelector(state => state.comments.isLoading);
    const dispatch = useDispatch();

    if ( !Object.keys(comments).length || !comments[cardId]) {
        return <div></div>
    }

    if ( isLoading ) {
        return <p id="commentLoading">Loading...</p>
    }

    const commentObjectArray = comments[cardId]; 

    return (
        <div className="Comment">
            { commentObjectArray.map((comment) => <ReactMarkdown className="CommentMarkdown" key={comment.data.name}>{ "**" + comment.data.author + ":** " + comment.data.body}</ReactMarkdown>) }
            <p id="close" onClick={() => dispatch(clearComments(cardId))} >Close X</p>
        </div>
    )
}