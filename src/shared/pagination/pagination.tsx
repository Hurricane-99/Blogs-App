import React from 'react'
import './pagination.css'
import {Button, Select} from "antd";

interface props {
    postsPerPage: number
    totalPosts: number
    paginate: (pageNumber: number) => void
    setPostsPerPage: (perPage: number) => void
}

const Pagination: React.FC<props> = ({postsPerPage, totalPosts, paginate, setPostsPerPage}) => {
    const pageNumbers = []
    const pages = [10, 20, 50, 100]

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const onChange = (e: number) => {
        setPostsPerPage(e)
    }

    return (
        <>
            <ul className={'pagination'}>
                {
                    pageNumbers.map(number => (
                        <li key={number} className={'pagination__item'}>
                            <Button size={'small'} onClick={() => paginate(number)} style={{borderRadius: '5px'}}>
                                {number}
                            </Button>
                        </li>
                    ))
                }
                {pageNumbers.length ? <li className={'pagination__item'}>
                    <Select size={'small'} onChange={onChange} defaultValue={10}
                            style={{width: '110px', borderRadius: '5px'}}>
                        {pages.map(page => (
                            <Select.Option key={page} value={page}>
                                {page} / page
                            </Select.Option>
                        ))}
                    </Select>
                </li> : null}
            </ul>

        </>
    )
}

export default Pagination
