import React, { useEffect } from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { episodeService } from '../../../services';
import {Episode} from "../Episode/Episode";
import {episodesActions} from "../../../store";

const Episodes = () => {
    const [query, ] = useSearchParams({page: '1'});
    const dispatch = useDispatch();
    const {episodes} = useSelector(state => state.episodes)
    const page  = query.get('page');

    useEffect(() => {
        episodeService.getAll(page).then(({data}) => dispatch(episodesActions.setResponse(data)))
    }, [page, dispatch]);


    return (
        <div>
             {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes}
