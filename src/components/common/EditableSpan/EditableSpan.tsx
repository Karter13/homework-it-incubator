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

    const activatedEditMode = () => {
        setEditMode(false);
    };
    const deActivatedEditMode = () => {
        setEditMode(true);
        props.onChange(props.value);
    };

    const changeValue = (value: string) => {
        props.onChange(value)
    };

    return (
        editMode
            ? <span className={style.span} onDoubleClick={activatedEditMode}>{props.value}</span>
            : <Input value={props.value}
                     onChange={changeValue}
                     error={props.error}
                     onBlur={deActivatedEditMode}
            />
    )
};


