import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getAll: () => apiService.get(urls.characters.base),
    getById: (id) => apiService.get(urls.characters.byId(id))
}

export {
    characterService
}