import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    return (
        <div>
            <div>tittle: {title}</div>
            <button onClick={() => navigate(`/posts/${id}`)}>post details</button>
        </div>
    );
};

export {Post};