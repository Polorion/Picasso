import * as React from 'react';
import S from './Item.module.css'

export const Item = (props) => {
    const onChange = (e, id) => {
        e.preventDefault()
        console.log(id)
    }
    const {id, title, body} = props.data
    return (
        <div className={S.body}>
            <div className={S.title}>{title}</div>
            <div className={S.content}>
                <div className={S.number}>{id}</div>
                <div className={S.text}>{body}</div>
            </div>
            <button onClick={(e) => {
                onChange(e, id)
            }} className={S.btn}>просмотр
            </button>
        </div>
    );
};