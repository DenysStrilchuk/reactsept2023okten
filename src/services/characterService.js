import {apiService} from "./apiService";
import {baseURL, urls} from "../constants";



const characterService = {
    getAll: () => apiService.get(urls.characters.base),
    getById: (id) => apiService.get(urls.characters.byId(id)),
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