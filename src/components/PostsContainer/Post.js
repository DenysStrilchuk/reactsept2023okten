const Post = ({post}) => {
    const {title} = post;
    return (
        <div>
            <div>title - {title}</div>
        </div>
    );
};

export {Post};