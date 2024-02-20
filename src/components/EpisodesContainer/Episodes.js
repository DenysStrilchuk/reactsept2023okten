import React, { useEffect, useState } from 'react';
import { episodeService } from '../../services';
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [prevNext, setPrevNext] = useState({prev: null, next: null});
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        episodeService.getAll(query.get('page'))
            .then(({ data }) => {
                setEpisodes(data.results);
                setPrevNext({prev: data.info.prev, next: data.info.next});
            });
    }, [query]);

    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const nextPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div>
            {episodes.map(episode => (
                <div key={episode.id}>
                    <h3>{episode.name}</h3>
                    <p>Episode: {episode.episode}</p>
                    <p>Air date: {episode.air_date}</p>
                </div>
            ))}
            <div>
                <button onClick={prevPage} disabled={!prevNext.prev}>Previous</button>
                <button onClick={nextPage} disabled={!prevNext.next}>Next</button>
            </div>
        </div>
    );
};

export {Episodes}
