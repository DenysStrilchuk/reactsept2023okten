import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, name, username, email, phone, website} = userDetails;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <button onClick={() => navigate('posts')}>post of current user</button>
            <hr/>
        </div>
    );
};

export {UserDetails};