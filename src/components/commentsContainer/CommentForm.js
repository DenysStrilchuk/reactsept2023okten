import {useForm} from "react-hook-form";

const CommentForm = () => {
    const [reset,] = useForm();
    return (
        <div>
            <form>
                <input type="text" placeholder={postId}/>
            </form>
        </div>
    );
};

export {CommentForm};