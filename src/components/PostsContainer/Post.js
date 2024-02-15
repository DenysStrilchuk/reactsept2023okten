const Post = ({post}) => {
    const {title} = post;
    return (
        <div>
            <div>{title}</div>
        </div>
    );
};

export {Post};