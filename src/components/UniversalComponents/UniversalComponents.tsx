import React from 'react';
import {Checkbox} from '../common/Checkbox/Checkbox';
import {Input} from '../common/Input/Input';
import {Button} from '../common/Button/Button';

export const UniversalComponents = () => {
    return (
        <div>
            <Checkbox/>
            <Input onChange={(value) => {console.log(value)}} value={'INPUT'}/>
            <Button value={'BUTTON'} click={() => console.log(('click'))}/>
        </div>
    )
};

