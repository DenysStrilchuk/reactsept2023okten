const Character2 = ({character}) => {
    const {id, name, status, species, gender, image} = character;
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image}
                alt={name}
            />
        </div>
    );
};

export {Character2};