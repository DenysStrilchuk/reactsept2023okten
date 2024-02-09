import {useEffect, useState} from "react";

import {carsService} from "../../services/carsService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    }, []);
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainer};