const Character = ({name, surname, age, info, photo}) => {
    return (
        <div>
            <h2>{name} {surname}</h2>
            <h3>{age}</h3>
            <p>{info}
            </p>
            <img src={photo}
                 alt={name}/>
        </div>
    );
};

export {Character};