import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from "./EpisodesPagination.module.css";

const EpisodesPagination = () => {
    const {prev, next} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams({page:'1'});
    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page')-1}`)
            return(prev)
        })
    }

    const nextPage = () => {
        setQuery(next => {
            next.set('page', `${+next.get('page')+1}`)
            return(next)
        })
    }
    return (
        <div className={css.EpisodesPagBtn}>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
        </div>
    );
};

export {EpisodesPagination};