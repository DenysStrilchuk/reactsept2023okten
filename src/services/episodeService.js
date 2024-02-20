import {apiService} from "./apiService";
import {urls} from "../constants";


const episodeService = {
    getAll: (page = '1') => apiService.get(urls.episodes.base, {params:{page}}),
    getById: (id) => apiService.get(urls.episodes.byId(id))
}

export {
    episodeService
}