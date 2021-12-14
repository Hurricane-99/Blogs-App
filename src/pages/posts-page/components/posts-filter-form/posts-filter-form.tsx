import React from 'react'
import './posts-filter-form.css'
import {Button, Card, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {filterPostsAction, getPostsThunk} from "../../../../store/slices/posts";

interface props {

}

const PostsFilterForm: React.FC<props> = () => {
    const dispatch = useDispatch()

    const onFinish = (values: any) => {
        dispatch(filterPostsAction(values.title))
    }
    const onReset = () => {
        dispatch(getPostsThunk())
    }

    return (
        <Card style={{margin: '20px 0'}} title={'Фильтр'}>
            <Form layout={'vertical'} onFinish={onFinish}>
                <Form.Item name={'title'} label={'Заголовок'}>
                    <Input id={'filter-input'} className={'filter-input'}/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'} type={'default'}>
                        Фильтр
                    </Button>
                    <Button onClick={onReset} style={{marginLeft: '15px'}} htmlType={'reset'} type={'default'}>
                        Сбрость
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default PostsFilterForm
