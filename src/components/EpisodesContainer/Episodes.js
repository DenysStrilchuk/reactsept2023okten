import React, { useEffect, useState } from 'react';
import { episodeService } from '../../services';
import {Episode} from "./Episode";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await episodeService.getAll(page);
            setEpisodes(response.data.results);
            setInfo(response.data.info);
        };
        fetchData();
    }, [page]);

    const prevPage = () => {
        setPage(page - 1);
    };

    const nextPage = () => {
        setPage(page + 1);
    };

    return (
        <div>
                {episodes && episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            <div>
                <button onClick={prevPage} disabled={page === 1}>Previous</button>
                <button onClick={nextPage} disabled={page === info.pages}>Next</button>
            </div>
        </div>
    );
};

export {Episodes}
