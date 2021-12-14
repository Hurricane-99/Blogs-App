export interface IPostsState {
    posts: {
        entity: IPost[]
        loaded: boolean
        errors: {
            isError: boolean
            message: string
        }
    }

}


export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}