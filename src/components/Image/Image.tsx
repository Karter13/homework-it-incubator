import React from "react";
import s from './Image.module.css'

type ImagePropsType = {
    url: string
}

export const Image: React.FC<ImagePropsType> = (props) => {
    return (
        <div className={s.logo}>
            <img src={props.url} alt="logo"/>
        </div>
    )
}
