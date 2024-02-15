import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => apiService.get(urls.comments.base),
    getByPostId: (postId) => apiService.get(urls.comments.base, {params: postId})
}

export {
    commentsService
}