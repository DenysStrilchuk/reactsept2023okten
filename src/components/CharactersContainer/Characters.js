import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {Character} from "./Character";
import {characterService} from "../../services";

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        characterService.getById(id).then(({data}) => setCharacters(data))
    }, [id]);

    return (
        <div>
            <button onClick={() => navigate(-1)}>back</button>
            {characters.map(character => <Character key={character.id} character={character} />)}
        </div>
    );
};

export { Characters };
