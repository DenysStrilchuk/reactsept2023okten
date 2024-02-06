import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosService = axios.create({baseURL});

const users = '/users';
const posts = '/posts';

const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },
    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}`
    }
}

export {
    axiosService,
    urls
}