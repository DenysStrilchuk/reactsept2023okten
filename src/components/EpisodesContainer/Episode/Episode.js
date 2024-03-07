

import css from "./Episode.module.css";
import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
const {id, name, episode:chapter, characters} = episode;
const navigate = useNavigate();

const toCharacters = () =>  {
    characters.map(character => character.split('/').slice(-1)[0]).join(',');
    navigate(`/characters/${id}`)
}
    return (
        <div className={css.EpisodeTableText} onClick={toCharacters}>
                <div>id:{id}</div>
                <div>name: {name}</div>
                <div>episode: {chapter}</div>
        </div>
    );
};

export {Episode};