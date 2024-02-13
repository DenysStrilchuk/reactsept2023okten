import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAllTodos: () => apiService.get(urls.todos.base),
    getTodosById: (id) => apiService.get(urls.todos.byId(id)),
    getAllAlbums: () => apiService.get(urls.albums.base),
    getAlbumsById: (id) => apiService.get(urls.albums.byId(id)),
    getAllComments: () => apiService.get(urls.comments.base),
    getCommentsById: (id) => apiService.get(urls.comments.byId(id)),
    getAllPosts: () => apiService.get(urls.posts.base),
    getPostsById: (id) => apiService.get(urls.posts.byId(id))
}

export {
    userService
}