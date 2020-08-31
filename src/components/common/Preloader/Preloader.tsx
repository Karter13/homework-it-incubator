import React from 'react';
import preloader from '../../../assets/images/loader.svg';
import style from './Preloader.module.css'

export type PreloaderPropsType = {}

export const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        <div className={style.loader}>
            <img src={preloader} alt={'preloader'} className={style.img}/>
        </div>
    )
};
