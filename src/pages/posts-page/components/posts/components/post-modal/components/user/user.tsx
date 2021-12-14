import React, {useEffect, useState} from 'react'
import {Avatar, message, Spin} from "antd";
import {UserOutlined} from "@ant-design/icons";
import '../../post-modal.css'
import {Link} from 'react-router-dom'
import {getUser} from "../../../../../../../../api/users/users";
import {IUser} from "../../../../../../../../interfaces/users/users";
import Loader from "../../../../../../../../shared/loader/loader";

interface props {
    id: string
    isUserPage?: boolean
    visible?: boolean
}

const User: React.FC<props> = ({id, isUserPage, visible}) => {
    const [name, setName] = useState<string>('')
    const [loaded, setLoaded] = useState<boolean>(false)
    useEffect(() => {
        setLoaded(false)
        getUser(id)
            .then((response: IUser) => {
                setName(response.username)
                setLoaded(true)
            })
            .catch((error) => {
                setLoaded(true)
                message.error(error.message)
            })
    }, [])

    if(!loaded) return <Loader/>


    return (
        <>
            <Spin spinning={!loaded}>
                <div className={'post-user__header'}>
                    <Avatar size="large" icon={<UserOutlined/>}/>
                    {isUserPage ? <span className={'post__username'}>{name}</span> :
                        <Link to={`/users/${id}`} className={'post__username'}>{name}</Link>}
                </div>
            </Spin>
        </>
    )
}

export default User
