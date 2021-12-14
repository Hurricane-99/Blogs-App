import {Action, createSlice, PayloadAction, ThunkAction} from "@reduxjs/toolkit"
import {IPost, IPostsState} from "../../interfaces/posts/posts"
import {getPosts, getPostsByUserId} from "../../api/posts/posts";


// Initial State
const initialState: IPostsState = {
    posts: {
        entity: [],
        loaded: false,
        errors: {
            isError: false,
            message: ''
        }
    },

}

// Selector
export const postsSelector = (state: { posts: IPostsState }) => state.posts

// Slice
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPostsAction: (state, action: PayloadAction<IPost[]>) => {
            state.posts.entity = action.payload
            state.posts.loaded = true
            state.posts.errors.isError = false
        },
        filterPostsAction: (state, action: PayloadAction<string>) => {
            state.posts.entity = state.posts.entity.filter(post => post.title.includes(action.payload))
            state.posts.loaded = true
            state.posts.errors.isError = false
        },
        postError: (state, action: PayloadAction<string>) => {
            state.posts.loaded = true
            state.posts.errors.isError = true
            state.posts.errors.message = action.payload
        }
    }
})

//Actions
export const {setPostsAction, postError, filterPostsAction} = postsSlice.actions

// Async Thunk
export const getPostsThunk = (data?: string): ThunkAction<void, IPostsState, unknown, Action<string>> => {
    return async dispatch => {
        try {
            const posts: IPost[] = await getPosts(data || '')
            dispatch(setPostsAction(posts))
        } catch (e: any) {
            dispatch(postError(e.message))
        }
    }
}
export const getPostsByUserIdThunk = (id: string): ThunkAction<void, IPostsState, unknown, Action<string>> => {
    return async dispatch => {
        try {
            const posts: IPost[] = await getPostsByUserId(id)
            dispatch(setPostsAction(posts))
        } catch (e: any) {
            dispatch(postError(e.message))
        }
    }
}


// Export reducer
export default postsSlice.reducer