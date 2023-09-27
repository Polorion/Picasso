import * as React from 'react';
import {Link, useParams} from "react-router-dom";
import {useGetPostIdQuery} from "../../redux";
import S from "./InfoPost.module.css";

export const InfoPost = () => {
    const id = useParams()
    const {data, isLoading} = useGetPostIdQuery(id.id)
    if (isLoading) return <h1 className={S.load}>Loading...</h1>

    return (
        <div className={S.body}>
            <div className={S.title}>{data.title}</div>
            <div className={S.text}>{data.body}</div>
            <Link className={S.link} to={'/'}>назад</Link>
        </div>);
};