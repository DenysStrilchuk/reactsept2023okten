import {PostDetails} from "../components/PostsContainer/PostDetails";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {postsService} from "../services/postsService";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        postsService.getById(id).then(({data}) => setPostDetails(data));
    }, [id]);
    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {PostDetailsPage};