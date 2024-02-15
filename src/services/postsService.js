import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    getAll: () => apiService.get(urls.posts.base),
    getBuId: (id) => apiService.get(urls.posts.byId(id))
}

export {
    postsService
}