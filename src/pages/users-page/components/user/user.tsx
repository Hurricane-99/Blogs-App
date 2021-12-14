import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Avatar, Descriptions, Result} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {clearUserAction, getUserThunk, usersSelector} from "../../../../store/slices/users";
import Loader from "../../../../shared/loader/loader";
import {UserOutlined} from "@ant-design/icons";
import './user.css'
import UserInfo from "./components/user-info/user-info";
import UserPosts from "./components/user-posts/user-posts";


interface props {

}

const UserPage: React.FC<props> = () => {
    const {user} = useSelector(usersSelector)
    const params = useParams<{ id: string }>()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserThunk(params.id))
        return function cleanup() {
            dispatch(clearUserAction(undefined))
        }
    }, [params, dispatch])
    if (!user.loaded) return <Loader/>
    if (user.errors.isError) return <Result title={user.errors.message}/>

    const {username} = user.entity!

    return (
        <React.Fragment>
            <div className={'user'}>
                <div className={'user__header'}>
                    <Avatar size="large" icon={<UserOutlined/>}/>
                    <span className={'user__username'}>{username}</span>
                </div>
                <div className={'user__info'}>
                    <UserInfo entity={user.entity!}/>
                </div>
            </div>
            <div className={'user__posts'}>
                <div>

                </div>
                <UserPosts username={username} params={params}/>
            </div>

        </React.Fragment>
    )
}

export default UserPage
