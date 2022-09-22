import {axiousService} from "./axious.service";
import {urls} from "../Constants";


const postService = {
    getAll: ()=> axiousService.get(urls.posts)
}

export {
    postService
}