import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector } from "react-redux";
import "./Comment.css";

export const Comment = ({comments}) => {
    const isLoading = useSelector(state => state.cards.isLoading);

    if ( isLoading ) {
        return <p id="commentLoading">Loading...</p>
    } 

    return (
        <div>
            { comments.map((comment) => {
                    return (
                        <div className="Comment">
                            <ReactMarkdown className="CommentMarkdown" key={comment.data.name}>{ "**" + comment.data.author + ":** " + comment.data.body}</ReactMarkdown>
                            {comment.data.replies ? <Comment comments={comment.data.replies.data.children} /> : <div></div> }
                        </div>
                    )
                })
            }
        </div>
    )
}