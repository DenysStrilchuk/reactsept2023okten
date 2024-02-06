import {PostComponent} from "../Post/PostComponent";
import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {PostDetailsComponent} from "../PostDetails/PostDetailsComponent";
import css from "../Posts/Posts.module.css"

const PostsComponents = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);
    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data));
    }, []);

    const getCurrentPost =  (post) => {
       setPostDetails(post);
    }
    return (
        <div className={css.Posts}>
            <div>
                {posts.map(post => <PostComponent key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            </div>
            <hr/>
            {postDetails && <PostDetailsComponent postDetails={postDetails}/>}
        </div>
    );
};

export {PostsComponents};