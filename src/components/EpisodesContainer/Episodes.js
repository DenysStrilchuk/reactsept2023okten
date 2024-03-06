import React, { useEffect, useState } from 'react';
import { episodeService } from '../../services';
import {useSearchParams} from "react-router-dom";
import {Episode} from "./Episode";
import css from "../MainContainer/Main.module.css";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [prevNext, setPrevNext] = useState({prev: null, next: null});
    const [query, setQuery] = useSearchParams({page: '1'});
    const page  = query.get('page');

    useEffect(() => {
        episodeService.getAll(page).then(({data}) => )
    }, [page]);

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
             <div className={css.Table}>
                 {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
             </div>
            <div className={css.Buttons}>
                <button onClick={prevPage} disabled={!prevNext.prev}>Previous</button>
                <button onClick={nextPage} disabled={!prevNext.next}>Next</button>
            </div>
        </div>
    );
};

export {Episodes}
