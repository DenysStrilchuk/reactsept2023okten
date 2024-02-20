import css from "../MainContainer/Main.module.css"

const Episode = ({episode}) => {
const {id, name, episode:chapter} = episode;
    return (
        <div className={css.Table}>
            <div>id:{id} name: {name} chapter: {chapter}</div>
        </div>
    );
};

export {Episode};