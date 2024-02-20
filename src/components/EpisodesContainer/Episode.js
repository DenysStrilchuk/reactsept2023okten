import css from "../MainContainer/Main.module.css"

const Episode = ({episode}) => {
const {id, name, episode:chapter} = episode;
    return (
        <div className={css.TableText}>

                <div>id:{id}</div>
                <div>name: {name}</div>
                <div>chapter: {chapter}</div>


        </div>
    );
};

export {Episode};