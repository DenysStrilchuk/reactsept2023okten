import {useEffect, useState} from "react";

import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";

const Comments = ({comments}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data));
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id}/>)}
        </div>
    );
};

export {Comments};