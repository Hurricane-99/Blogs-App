import PostsPage from "./pages/posts-page/posts-page";
import React from "react";
import UsersPage from "./pages/users-page/users-page";
import UserPage from "./pages/users-page/components/user/user";


export interface IRoute {
    path: string
    component: React.FC | any
}

export const routes: IRoute[] = [
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/users',
        component: UsersPage
    },
    {
        path: '/users/:id',
        component: UserPage
    }
]