import React from 'react';
import style from './Checkbox.module.css'


export const Checkbox = () => {
    return (
        <div>
            <input type="checkbox" className={`${style.optionInput} ${style.radio}`}/>
        </div>
    )
};
