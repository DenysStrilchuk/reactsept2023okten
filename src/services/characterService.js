import {apiService} from "./apiService";
import {urls} from "../constants";
import {baseURL} from "../constants/urls"

const characterService = {
    getAll: () => apiService.get(urls.characters.base),
    getById: (id) => apiService.get(urls.characters.byId(id)),
   getByEpisodeId: (episodeId) => apiService.get(urls.episodes.base)


    getByEpisodeId: async (episodeId) => {
        const response = await apiService.get(`${baseURL}/episode/${episodeId}`);
        const characterUrls = response.data.characters;
        const characterRequests = characterUrls.map(characterUrl => apiService.get(characterUrl));
        const charactersResponses = await Promise.all(characterRequests);
        return charactersResponses.map(res => res.data);
    }
}

export {
    characterService
}