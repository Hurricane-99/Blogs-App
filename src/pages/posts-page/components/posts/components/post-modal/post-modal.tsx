import React, {useEffect, useState} from 'react'
import {Button, Modal} from "antd";
import {IPost} from "../../../../../../interfaces/posts/posts";
import {useDispatch, useSelector} from "react-redux";
import {clearUserAction, getUserThunk, usersSelector} from "../../../../../../store/slices/users";
import Title from "antd/es/typography/Title";
import User from "./components/user/user";

interface props {
    post: IPost
    id: number
    isUserPage?: boolean
}

const PostModal: React.FC<props> = ({post, id, isUserPage}) => {


    const [visible, setVisible] = useState<boolean>(false)
    const dispatch = useDispatch()


    const showModal = () => setVisible(true)
    const hideModal = () => {
        setVisible(false)
        if (!isUserPage) {
            dispatch(clearUserAction(undefined))
        }
    }

    return (
        <React.Fragment key={id}>
            <Button type={'link'} onClick={showModal}>
                Подробнее
            </Button>
            <Modal
                visible={visible}
                onCancel={hideModal}
                footer={[
                    <Button key={1} type={'primary'} onClick={hideModal}>
                        OK
                    </Button>
                ]}>
                <User isUserPage={isUserPage} id={id.toString()}/>
                <Title level={5}>{post.title}</Title>
                {post.body}
            </Modal>
        </React.Fragment>
    )
}

export default PostModal
