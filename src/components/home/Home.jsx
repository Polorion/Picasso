import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import S from './Post.module.css'
import {Item} from "./item/Item";
import {useGetPostQuery} from "../../redux";

export const Home = () => {
    const lastElement = useRef()
    const observerRef = useRef()
    const [count, setCount] = useState(10)
    const {data = [], isLoading} = useGetPostQuery(count)
    console.log(data)

    let options = {
        rootMargin: "150px",
        threshold: 1.0,
    };
    useEffect(() => {
        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                setCount(prevState => prevState + 10)
            }
        }

        observerRef.current = new IntersectionObserver(callback,options);
        if (lastElement.current) {

            observerRef.current.observe(lastElement.current)
        }
    }, [isLoading])

    if (isLoading) return <h1>Loading...</h1>
    return (
        <div className="App">
            {data.map(el => (
                <Item data={el} key={el.id}/>
            ))}
            <div ref={lastElement} className={S.observer}></div>
            <button onClick={() => {
                setCount(prevState => prevState + 10)
            }}></button>
        </div>
    );
};