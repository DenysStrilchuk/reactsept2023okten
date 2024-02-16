import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    getByUserId: (userId) => apiService.get(urls.posts.base, {params:{userId}}),
    getById: (id) => apiService.get(urls.posts.byId(id))
}

export {
    postsService
}