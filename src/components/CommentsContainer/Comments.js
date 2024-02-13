import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {Comment} from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        userService.getAllComments().then(({data}) => setComments(data));
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};