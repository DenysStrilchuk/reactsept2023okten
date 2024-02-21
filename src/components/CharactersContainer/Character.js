const Character = ({character}) => {
        const {id, name, image} = character;
    return (
        <div>
            <button>back</button>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Character};