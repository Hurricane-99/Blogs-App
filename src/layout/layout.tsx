import React from 'react'
import {Layout, Menu, Breadcrumb} from 'antd';
import {Link} from 'react-router-dom'

interface props {

}

const Layouts: React.FC<props> = ({children}) => {
    const {Header, Content, Footer} = Layout;

    return (
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key={'posts'}>
                            <Link to={'/posts'}>Посты</Link>
                        </Menu.Item>
                        <Menu.Item key={'users'}>
                            <Link to={'/users'}>Пользователи</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content  style={{padding: '0 50px'}}>
                    {children}
                </Content>
                <Footer style={{textAlign: 'center'}}>Our Blogs</Footer>
            </Layout>,

        </>
    )
}

export default Layouts
