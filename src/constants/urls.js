const baseURL = 'https://rickandmortyapi.com/api';

const characters = '/character';
const episodes = '/episode';

const urls = {
    characters: {
        base: characters,
        byId: (id) => `${characters}/${id}`
    },
    episodes: {
        base: episodes,
        byId: (id) => `${episodes}/${id}`
    }
}

export {
    baseURL,
    urls
}