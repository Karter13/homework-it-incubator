import React, {ChangeEvent, useState} from 'react';
import s from './Greeting.module.css'

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

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewNameTitle(e.currentTarget.value)
    };
    const addNewName = () => {
        props.addName(newNameTitle);
        setNewNameTitle('');
    };

    return (
        <div className={s.box}>
            <input value={newNameTitle} onChange={onChangeHandler}/>
            <button onClick={addNewName}>Hello</button>
            <span>{`количество имен - ${props.names.length}`}</span>
        </div>
    )
};
