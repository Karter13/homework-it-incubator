import React, {useCallback, useState} from 'react';
import style from './JuniorPlus.module.css'
import {Radio} from '../common/Radio/Radio';
import {RadioType} from '../Junior/Junior';

export const JuniorPlus = () => {
    const [radioValue, setRadioValue] = useState<Array<RadioType>>([
        {id: 1, name: 'Light', checked: false},
        {id: 2, name: 'Dark', checked: false},
    ]);

    const changeRadio = useCallback((id: number, value: any | boolean) => {
        radioValue.map(r => {
            if (r.id === id) {
                r.checked = !r.checked;
                setRadioValue([...radioValue]);
            } else {
                r.checked = false;
            }
        });
    }, []);


    return (
        <div className={ style.container}>
            <h1>JuniorPlus</h1>
            <Radio radioValue={radioValue} onChange={changeRadio}/>
        </div>

    )
};
