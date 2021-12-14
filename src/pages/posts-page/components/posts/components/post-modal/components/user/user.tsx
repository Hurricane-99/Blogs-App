import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getUserThunk, usersSelector} from "../../../../../../../../store/slices/users";
import Loader from "../../../../../../../../shared/loader/loader";
import {Avatar, Result} from "antd";
import {UserOutlined} from "@ant-design/icons";
import '../../post-modal.css'
import {Link} from 'react-router-dom'

interface props {
    id: string
}

const User: React.FC<props> = ({id}) => {
    const {user} = useSelector(usersSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserThunk(id))
    }, [dispatch])
    if (!user.loaded) return <Loader/>
    if (user.errors.isError) return <Result title={user.errors.message}/>
    const {username} = user.entity!
    return (
        <>
            <div className={'post-user__header'}>
                <Avatar size="large" icon={<UserOutlined/>}/>
                <Link to={`/users/${id}`} className={'post__username'}>{username}</Link>
            </div>
        </>
    )
}

export default User
