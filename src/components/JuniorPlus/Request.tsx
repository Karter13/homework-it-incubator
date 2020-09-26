import React, {useState} from 'react';
import {Button} from '../common/Button/Button';
import {Checkbox} from '../common/Checkbox/Checkbox';
import style from './JuniorPlus.module.css'
import {requestAPI} from '../../api/request-api';

type RequestPropsType = {
    success: boolean
    setValueCheckBox: (checkValue: boolean) => void
}

export const Request: React.FC<RequestPropsType> = (props) => {

    const [value, setValue] = useState(false)

    const changeValue = (value: boolean) => {
        setValue(value);
    };

    const  changeStatus = () => {
        requestAPI.createStatus(value)
            .then((res) => {
                debugger

            })
            .catch(err => console.log(err))

        props.setValueCheckBox(value)
    };

    return (
        <div className={style.blockRequest}>
            <Button click={changeStatus} value={'request'}/>
            <Checkbox checkboxValue={value} changeValue={changeValue}/>
            <div>{props.success.toString()}</div>
        </div>
    )
};


