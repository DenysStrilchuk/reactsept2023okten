import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams();
    return (
        <div>
            EpisodesPagination
        </div>
    );
};

export {EpisodesPagination};