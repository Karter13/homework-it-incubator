import React from 'react';
import style from './Button.module.css'

export type ButtonPropsType = {
    click: () => void
    value: string
    filter?: string
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <>
            <button className={props.filter === 'delete' ? `${style.button} ${style.type}` : style.button} onClick={props.click}>{props.value}</button>
        </>
    )
};
