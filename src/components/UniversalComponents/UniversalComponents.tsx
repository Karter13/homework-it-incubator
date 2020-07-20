import React, {useState} from 'react';
import {Checkbox} from '../common/Checkbox/Checkbox';
import {Input} from '../common/Input/Input';
import {Button} from '../common/Button/Button';

export const UniversalComponents = () => {
    let [checkboxValue, setCheckboxValue] = useState<boolean>(true);
    const changeValue = (value: boolean) => {
        setCheckboxValue(value);
    };

    return (
        <div>
            <Checkbox checkboxValue={checkboxValue} changeValue={changeValue}/>
            <Input onChange={(value) => {console.log(value)}} value={'INPUT'}/>
            <Button value={'BUTTON'} click={() => console.log(('click'))}/>
        </div>
    )
};

