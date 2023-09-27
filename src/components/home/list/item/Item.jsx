import * as React from 'react';
import S from './Item.module.css'
import {Link} from "react-router-dom";

export const Item = (props) => {

    const {id, title, body} = props.data
    return (
        <div className={S.body}>
            <div className={S.title}>{title}</div>
            <div className={S.content}>
                <div className={S.number}>{id}</div>
                <div className={S.text}>{body}</div>
            </div>
            <Link className={S.btn} to={`post/${props.data.id}`}>Просмотр</Link>
        </div>
    );
};