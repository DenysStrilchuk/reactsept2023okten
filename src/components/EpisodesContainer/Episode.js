import css from "../MainContainer/Main.module.css"
import {NavLink} from "react-router-dom";

const Episode = ({episode}) => {
const {id, name, episode:chapter} = episode;
    return (
        <div className={css.TableText}>
                <div>id:{id}</div>
                <div>name: {name}</div>
                <NavLink to={`/characters?episodeId=${id}`}>chapter: {chapter}</NavLink>
        </div>
    );
};

export {Episode};