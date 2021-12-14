import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getPostsThunk, postsSelector} from "../../../../store/slices/posts";
import Loader from "../../../../shared/loader/loader";
import {Card, Col, Empty, Result, Row} from "antd";
import PostModal from "./components/post-modal/post-modal";
import Pagination from "../../../../shared/pagination/pagination";

interface props {

}

const Posts: React.FC<props> = () => {
    const {posts} = useSelector(postsSelector)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [postsPerPage, setPostsPerPage] = useState<number>(10)


    const changePostsPerPage = (posts: number) => {
        setCurrentPage(1)
        setPostsPerPage(posts)
    }


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsThunk())
    }, [dispatch])
    if (!posts.loaded) return <Loader/>
    if (posts.errors.isError) return <Result title={posts.errors.message}/>


    const lastPost = currentPage * postsPerPage
    const firstPost = lastPost - postsPerPage
    const currentPost = posts.entity.slice(firstPost, lastPost)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    return (
        <Card title={'Блоги'}>
            <Row gutter={15}>
                {posts.entity.length ? currentPost.map((post) => (
                    <Col key={post.id} md={8} sm={24} xs={24} lg={6} style={{marginBottom: '20px'}} span={8}>
                        <Card style={{minHeight: '200px'}} title={post.title}
                              extra={<><PostModal post={post} id={post.id}/></>}>
                            {post.body.slice(0, 50)}...
                        </Card>
                    </Col>
                )) : <Empty style={{margin: '0 auto'}}/>}
            </Row>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.entity.length} setPostsPerPage={changePostsPerPage} paginate={paginate}/>
        </Card>
    )
}

export default Posts
