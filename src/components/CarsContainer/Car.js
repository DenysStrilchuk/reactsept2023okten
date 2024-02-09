const Car = ({car}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button>create</button>
            <button>delete</button>
            <button>update</button>
            <hr/>
        </div>
    );
};

export {Car};