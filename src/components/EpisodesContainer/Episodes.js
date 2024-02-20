import {useEffect, useState} from "react";
import {episodeService} from "../../services";
import {Episode} from "./Episode";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page:'1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data.items)
            setPrevNext({prev: data.prev, next: data.next})
        });

    }, [query.get('page')]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next = () => {
        prev.set('page', (+prev.get('page') + 1).toString())
        return prev
    }
    return (
        <div>
            {episodes && episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
            <button disabled={!prevNext.next} onClick={next}>next</button>
        </div>
    );
};

export {Episodes};