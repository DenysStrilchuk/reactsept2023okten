const Post = ({post}) => {
    const {title} = post;
    return (
        <div>
            <div>tittle: {title}</div>
        </div>
    );
};

export {Post};