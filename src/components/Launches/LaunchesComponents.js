import {useEffect, useState} from "react";
import {LaunchComponent} from "../Launch/LaunchComponent";
import {axiosService, urls} from "../../services/axiosService";

const LaunchesComponents = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
      axiosService(urls.launches.base).then(({data}) => setLaunches(data));
    }, []);
    const filteredLaunches = launches.filter(launch => launch.launch_year !== '2020');
    return (
        <div>
            {filteredLaunches.map(launch => <LaunchComponent key={launch.mission_name} launch={launch}/>)};
        </div>
    );
};

export {LaunchesComponents};