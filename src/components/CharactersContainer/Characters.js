import { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {Character} from "./Character";
import {characterService} from "../../services";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const location = useLocation();
    const episodeId = new URLSearchParams(location.search).get('episodeId');
    const navigate = useNavigate();

    useEffect(() => {
        if (episodeId) {
            (async () => {
                const response = await characterService.getByEpisodeId(episodeId);
                setCharacters(response);
            })();
        }
    }, [episodeId]);

    return (
        <div>
            <button onClick={() => navigate(-1)}>back</button>
            {characters.map(character => <Character key={character.id} character={character} />)}
        </div>
    );
};

export { Characters };
