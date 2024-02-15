import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, username, email, address:{street, suite, city, zipcode}, phone, website} = userDetails;

    const navigate = useNavigate();
    return (
        <div>
            <div>{id}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address:</div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <button onClick={() => navigate('postsTitle', {state:{userId:id}})}>post of current user</button>
        </div>
    );
};

export {UserDetails};
