import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getUsersThunk, usersSelector} from "../../../../store/slices/users";
import Loader from "../../../../shared/loader/loader";
import {Card, Col, Result, Row} from "antd";
import './users.css'
import {Link} from 'react-router-dom'

interface props {

}

const Users: React.FC<props> = () => {
    const {users} = useSelector(usersSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsersThunk())
    }, [dispatch])

    if (!users.loaded) return <Loader/>
    if (users.errors.isError) return <Result title={users.errors.message}/>
    return (
        <>
            <Card style={{margin: '20px 0'}} title={'Пользователи'}>
                <Row gutter={15}>
                    {users.entity.map((user) => (
                        <Col md={8} sm={24} xs={24} lg={6} style={{marginBottom: '20px'}} span={8} key={user.id}>
                            <Card style={{minHeight: '200px'}} title={user.username} extra={<Link to={`/users/${user.id}`}>Профиль</Link>}>
                                <ul className={'users__list'}>
                                    <li className={'users__item'}>
                                        email: {user.email}
                                    </li>
                                    <li className={'users__item'}>
                                        Адрес: {user.address.city + user.address.street}
                                    </li>
                                    <li className={'users__item'}>
                                        Номер телефона: {user.phone}
                                    </li>

                                </ul>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card>
        </>
    )
}

export default Users
