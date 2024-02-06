import {useEffect, useState} from "react";
import axios from "axios";
import {LaunchComponent} from "../Launch/LaunchComponent";

const LaunchesComponents = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/').then(({data}) => setLaunches(data));
    }, []);
    return (
        <div>
            {launches.map(launch => {
                if (launch.launch_year !== '2020') {
                return <LaunchComponent key={launch.mission_name} launch={launch}/>
            } else {
                return null;
            }
            })}
        </div>
    );
};

export {LaunchesComponents};