import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";
import {Post} from "./Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postsService.getByUserId(userId).then(({data}) => setPosts(data))
    }, [userId]);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};