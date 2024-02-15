import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();
    return (
        <div>
            <div>{id} - {name}</div>
            <button onClick={() => navigate('user', {state:{id:id}})}>user details</button>
        </div>
    );
};

export {User};