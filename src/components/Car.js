const Car = ({car}) => {
    const {brand} = car;
    return (
        <div>
            <div>{brand}</div>
        </div>
    );
};

export {Car};