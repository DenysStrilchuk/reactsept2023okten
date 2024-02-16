import {Comments} from "../CommentsContainer/Comments";

const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
            <Comments postId={id}/>
        </div>
    );
};

export {PostDetails};