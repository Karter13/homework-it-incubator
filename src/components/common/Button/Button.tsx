import React from 'react';
import style from './Button.module.css'

export type ButtonPropsType = {
    click: () => void
    value: string
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <>
            <button className={style.button} onClick={props.click}>{props.value}</button>
        </>
    )
};
