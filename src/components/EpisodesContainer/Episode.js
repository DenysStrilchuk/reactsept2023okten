const Episode = ({episode}) => {
const {id, name, chapter} = episode;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};