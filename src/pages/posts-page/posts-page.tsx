import React from 'react'
import Posts from "./components/posts/posts";
import PostsFilterForm from "./components/posts-filter-form/posts-filter-form";

interface props {

}

const PostsPage: React.FC<props> = () => {


    return (
        <>
            <PostsFilterForm/>
            <Posts/>
        </>
    )
}

export default PostsPage
