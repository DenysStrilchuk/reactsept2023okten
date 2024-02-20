import css from "../MainContainer/Main.module.css"
import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
const {id, name, episode:chapter} = episode;
const navigate = useNavigate();
    return (
        <div className={css.TableText}>

                <div>id:{id}</div>
                <div>name: {name}</div>
                <div onClick={() => navigate('')}>chapter: {chapter}</div>


        </div>
    );
};

export {Episode};