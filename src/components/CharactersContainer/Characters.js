import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {characterService} from "../../services";
import {Character} from "./Character";


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        characterService.getById(id).then(({data}) => setCharacters(data));
    }, [id]);

    const back = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={back}>back</button>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};