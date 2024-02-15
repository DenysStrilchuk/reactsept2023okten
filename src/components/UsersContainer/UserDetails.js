const UserDetails = ({userDetails}) => {
    const {id, name, username} = userDetails;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
        </div>
    );
};

export {UserDetails};