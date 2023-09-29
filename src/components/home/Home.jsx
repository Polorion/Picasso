import React, {useEffect, useState} from 'react';
import {useGetPostQuery} from "../../redux";
import S from './Home.module.css'
import {List} from "./list/List";


const Home = () => {

    const [page, setPage] = useState(1)
    const [post, setPost] = useState([])
    const {data = [], isLoading, ...isFetching} = useGetPostQuery(page)
    const addPost = (data) => {
        setPost(prevState => [...prevState, ...data])
    }
    console.log('render')
    useEffect(() => {
        addPost(data)
    }, [data])

    const nextPage = () => {
        setPage(prevState => prevState + 1)
    }


    if (isLoading) return <h1 className={S.titile}>Loading...</h1>
    return (
        <div className={'App'}>
            <List post={post} nextPage={nextPage}/>
        </div>
    );
}

export default Home;