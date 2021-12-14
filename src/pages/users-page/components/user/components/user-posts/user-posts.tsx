import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getPostsByUserIdThunk, postsSelector} from "../../../../../../store/slices/posts";
import Loader from "../../../../../../shared/loader/loader";
import {Card, Col, Result, Row} from "antd";
import PostModal from "../../../../../posts-page/components/posts/components/post-modal/post-modal";

interface props {
    params: {
        id: string
    }
    username: string
}

const UserPosts: React.FC<props> = ({params, username}) => {
    const {posts} = useSelector(postsSelector)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPostsByUserIdThunk(params.id))
    }, [dispatch, posts, params])

    if (!posts.loaded) return <Loader/>
    if (posts.errors.isError) return <Result title={posts.errors.message}/>


    return (
        <>
            <Card title={`Блоги ${username}`}>
                <Row gutter={15}>
                    {posts.entity.map((post) => (
                        <Col key={post.id} md={8} sm={24} xs={24} lg={6} style={{marginBottom: '20px'}} span={8}>
                            <Card style={{minHeight: '200px'}} title={post.title}
                                  extra={<><PostModal id={post.id} post={post}/></>}>
                                {post.body.slice(0, 50)}...
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card>
        </>
    )
}

export default UserPosts
