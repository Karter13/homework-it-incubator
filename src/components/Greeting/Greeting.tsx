import React, {KeyboardEvent, useState} from 'react';
import s from './Greeting.module.css'
import {Input} from '../common/Input/Input';
import {Button} from '../common/Button/Button';

export type NameType = {
    id: string,
    name: string
}
export type GreetingPropsType = {
    addName: (name: string) => void
    names: Array<NameType>
}

export const Greeting: React.FC<GreetingPropsType> = (props) => {

    let [newNameTitle, setNewNameTitle] = useState<string>('');

    const onChangeHandler = (value: string) => {
        setNewNameTitle(value);
    };
    const addNewName = () => {
        props.addName(newNameTitle);
        setNewNameTitle('');
    };

    const pressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.charCode === 13) {
            addNewName();
        }
    };

    return (
        <div className={s.box}>
            <Input onChange={onChangeHandler}
                   value={newNameTitle}
                   pressEnter={pressEnter}
            />
            <Button value={'Hello'} click={addNewName}/>
            <span>{`количество имен - ${props.names.length}`}</span>
        </div>
    )
};
