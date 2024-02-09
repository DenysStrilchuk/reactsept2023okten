import {useEffect, useState} from "react";

import {carsService} from "../../services/carsService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [carForDelete, setCarForDelete] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    }, [trigger]);
    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} carForDelete={carForDelete} setCarForDelete={setCarForDelete}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete}/>
        </div>
    );
};

export {CarsContainer};