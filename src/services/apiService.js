import axios from "axios";
import {baseURL} from "../components/constants/urls";

const apiService =  axios.create({baseURL});

export {
    apiService
}

