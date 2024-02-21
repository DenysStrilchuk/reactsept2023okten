// CharactersPage.js

import { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { characterService } from '../../services';
import {Character} from "./Character";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const location = useLocation();
    const episodeId = new URLSearchParams(location.search).get('episodeId');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await characterService.getByEpisodeId(episodeId);
            setCharacters(response);
        };
        if (episodeId) {
            fetchData();
        }
    }, [episodeId]);

    return (
        <div>
            <button onClick={() => navigate(-1)}>back</button>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};
