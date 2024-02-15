import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";
import {Post} from "./Post";

const Posts = () => {
    const {state:{id}} = useLocation();

    const [post, setPosts] = useState(null);

    useEffect(() => {
        postsService.getBuId(id).then(({data}) => setPosts(data))
    }, [id]);
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};