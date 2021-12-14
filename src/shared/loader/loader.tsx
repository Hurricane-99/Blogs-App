import React from 'react'
import {Skeleton} from "antd";
interface props {

}

const Loader: React.FC<props> = () => {
    return (
        <Skeleton active/>
    )
}

export default Loader
