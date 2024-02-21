import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getAll: () => apiService.get(urls.characters.base),
    getById: (id) => apiService.get(urls.characters.byId(id)),
    getByEpisodeId: async (episodeId) => {
        const response = await apiService.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
        const characterUrls = response.data.characters;
        const characterRequests = characterUrls.map(characterUrl => apiService.get(characterUrl));
        const charactersResponses = await Promise.all(characterRequests);
        return charactersResponses.filter(res => res.data).map(res => res.data);
    }
}

export {
    characterService
}