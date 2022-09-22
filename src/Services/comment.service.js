import {axiousService} from "./axious.service";
import {urls} from "../Constants";


const commentService={
    getAll: ()=> axiousService.get(urls.comments)
}
export {
    commentService
}