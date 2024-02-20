import {Episodes} from "../components";
import css from "../components/MainContainer/Main.module.css"
const EpisodesPage = () => {
    return (
        <div className={css.Main}>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};