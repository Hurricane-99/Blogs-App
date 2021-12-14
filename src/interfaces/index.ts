import {IPostsState} from "./posts/posts";
import {IUsersState} from "./users/users";


export interface IRootState {
    posts: IPostsState
    users: IUsersState
}