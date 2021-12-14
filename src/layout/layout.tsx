import React from 'react'
import {Layout, Menu, Breadcrumb} from 'antd';
import {Link, useLocation} from 'react-router-dom'

interface props {

}

interface IMenu {
    path: string
    name: string
}

const Layouts: React.FC<props> = ({children}) => {
    const {Header, Content, Footer} = Layout;
    const {pathname} = useLocation()

    const menu: IMenu[] = [
        {
            path: '/posts',
            name: 'Посты'
        },
        {
            path: '/users',
            name: 'Пользователи'
        }
    ]

    return (
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
                        {menu.map(item => (
                            <Menu.Item key={item.path}>
                                <Link to={item.path}>{item.name}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    {children}
                </Content>
                <Footer style={{textAlign: 'center'}}>Our Blogs</Footer>
            </Layout>,

        </>
    )
}

export default Layouts
