import React from 'react';
import style from './Button.module.css'

export type ButtonProrsType = {
    click: () => void
    value: string
}

export const Button: React.FC<ButtonProrsType> = (props) => {
    return (
        <>
            <button className={style.button} onClick={props.click}>{props.value}</button>
        </>
    )
};
