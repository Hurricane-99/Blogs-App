import React from 'react'
import {Descriptions} from "antd";
import {IUser} from "../../../../../../interfaces/users/users";

interface props {
    entity: IUser
}

const UserInfo: React.FC<props> = ({entity}) => {
    const {username, id, address, phone, email, company, name, website} = entity

    return (
        <>
            <ul className={'user__list'}>
                <li className={'user__item'}>
                    ID: {id}
                </li>
                <li className={'user__item'}>
                    Имя: {name}
                </li>
                <li className={'user__item'}>
                    Адрес: <ul className={'user__sub-list'}>
                    <li className={'user__sub-item'}>
                        Город: {address.city}
                    </li>
                    <li className={'user__sub-item'}>
                        Улица: {address.street}
                    </li>
                    <li className={'user__sub-item'}>
                        Почтовый индекс: {address.zipcode}
                    </li>
                </ul>
                </li>
                <li className={'user__item'}>
                    Email: {email}
                </li>
                <li className={'user__item'}>
                    Номер телефона: {phone}
                </li>
                <li className={'user__item'}>
                    Компания:
                    <ul className={'user__sub-list'}>
                        <li className={'user__sub-item'}>
                            Название: {company.name}
                        </li>
                        <li className={'user__sub-item'}>
                            Клише́ : {company.catchPhrase}
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default UserInfo
