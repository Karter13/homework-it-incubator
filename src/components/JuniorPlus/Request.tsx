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

    const [value, setValue] = useState(false);
    const [response, setResponse] = useState<boolean | string >('');

    const changeValue = (value: boolean) => {
        setValue(value);
    };

    const  changeStatus = () => {
        requestAPI.createStatus(value)
            .then((res) => {
                setResponse(res.data.yourBody.success);
            })
            .catch(err => {
                const error = err.response ? err.response.data.info : err.message;
                setResponse(error);
            });

    };

    return (
        <div className={style.blockRequest}>
            <Button click={changeStatus} value={'request'}/>
            <Checkbox checkboxValue={value} changeValue={changeValue}/>
            <div className={style.answer}>{response.toString().toUpperCase()}</div>
        </div>
    )
};


