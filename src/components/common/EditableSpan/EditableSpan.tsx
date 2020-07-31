import React, {useState} from 'react';
import style from './EditableSpan.module.css';
import {Input} from '../Input/Input';


export type EditableSpanPropsType = {
    value: string
    onChange: (value: string) => void
    error: string | null

}

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {

    let [editMode, setEditMode] = useState<boolean>(true);
    let [newValue, setNewValue] = useState(props.value);

    const activatedEditMode = () => {
        setEditMode(false);
    };
    const deActivatedEditMode = () => {
        setEditMode(true);
        props.onChange(newValue);
    };

    const changeValue = (value: string) => {
        setNewValue(value)

    };

    return (
        editMode
            ? <span className={style.span} onDoubleClick={activatedEditMode}>{props.value}</span>
            : <Input value={newValue}
                     onChange={changeValue}
                     error={props.error}
                     onBlur={deActivatedEditMode}
            />
    )
};


