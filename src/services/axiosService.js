import axios from "axios";

const axiosService = axios.create({baseURL:'https://api.spacexdata.com/v3/'});

const launches = '/launches';

const urls = {
    launches: {
        base: launches
    }
}

export {
    axiosService,
    urls
}