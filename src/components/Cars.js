import {useEffect} from "react";
import {carService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../store";
import {Car} from "./Car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carsActions.setResponse(data)))
    }, [dispatch]);
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};