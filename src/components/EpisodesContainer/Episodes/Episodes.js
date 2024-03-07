import React, { useEffect } from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {episodesActions} from "../../../store";
import {Episode} from "../Episode";
import css from "./Episodes.module.css";

const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes)
    const [query, ] = useSearchParams({page: '1'});
    const dispatch = useDispatch();
    const page  = query.get('page');

    useEffect(() => {
        dispatch(episodesActions.getAll({page}));
    }, [page,dispatch]);


    return (
        <div className={css.EpisodesTable}>
             {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes}
