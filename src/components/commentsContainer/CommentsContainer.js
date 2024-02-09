import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";
import {useEffect, useState} from "react";
import {commentsService} from "../../services/commentsService";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data));
    }, []);
    return (
        <div>
            <CommentForm/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};