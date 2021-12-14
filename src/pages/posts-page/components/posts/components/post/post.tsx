import React, {useState} from 'react'
import {Button, Modal} from "antd";
import {IPost} from "../../../../../../interfaces/posts/posts";

interface props {
    post: IPost
    id: number
}

const PostModal: React.FC<props> = ({post, id}) => {
    const [visible, setVisible] = useState<boolean>(false)
    const showModal = () => setVisible(true)
    const hideModal = () => setVisible(false)

    return (
        <React.Fragment key={id}>
            <Button type={'link'} onClick={showModal}>
                Подробнее
            </Button>
            <Modal
                visible={visible}
                title={post.title}
                onCancel={hideModal}
                footer={[
                    <Button key={1} type={'primary'} onClick={hideModal}>
                        OK
                    </Button>
                ]}>
                {post.body}
            </Modal>
        </React.Fragment>
    )
}

export default PostModal
