import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/userService";
import {Post} from "./Post";

const Posts = () => {
    const [post, setPosts] = useState(null);
    const {state:{postId}} = useLocation();

    useEffect(() => {
        userService.getPostsById(postId).then(({data}) => setPosts(data))
    }, [postId]);

    return (
        <div>
            {post &&  <Post key={post.id} post={post}/>}
        </div>
    );
};

export {Posts};