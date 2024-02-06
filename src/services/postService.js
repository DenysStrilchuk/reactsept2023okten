import axios from "axios";
import {axiosService, urls} from "./axiosService";

const postService = {
    getAll: () => axiosService(urls.posts.base),
    getByID: (id) => axiosService(urls.posts.byId(id))
}

export {
    postService
}