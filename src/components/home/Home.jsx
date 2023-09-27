import React, {useEffect, useState} from 'react';
import ListComponent from "./list/List";
import {useGetPostQuery} from "../../redux";
import S from './Home.module.css'


const Home = () => {
    const [count, setCount] = useState(20)
    const {data = [], isLoading} = useGetPostQuery(count)
    const moreItemsLoading = false
    const [hasNextPage, setHasNextPage] = useState(true)
    useEffect(() => {
        if (count === 100) {
            setHasNextPage(false)
        }
    }, [data])


    const loadMore = () => {
        setCount(prevState => prevState + 10)
    }

    if (isLoading) return <h1 className={S.titile}>Loading...</h1>
    return (
        <div className={'App'}>
            <ListComponent
                items={data}
                moreItemsLoading={moreItemsLoading}
                loadMore={loadMore}
                hasNextPage={hasNextPage}
            />
        </div>
    );
}

export default Home;