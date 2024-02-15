const Post = ({post}) => {
    const {title} = post;

    return (
        <div>
            <div>title - {title}</div>
            <button>post details</button>
        </div>
    );
};

export {Post};