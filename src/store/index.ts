import {combineReducers, configureStore} from '@reduxjs/toolkit'
import posts from './slices/posts'
import users from './slices/users'
import {IRootState} from "../interfaces"
import {useDispatch} from "react-redux"

const reducer = combineReducers<IRootState>({
    posts,
    users
})


const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === "development"
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()


export default store