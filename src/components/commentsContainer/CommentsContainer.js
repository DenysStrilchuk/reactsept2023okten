import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";

const CommentsContainer = () => {
    return (
        <div>
            <CommentForm/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};