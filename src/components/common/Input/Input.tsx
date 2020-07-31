import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './Input.module.css'

export type InputProsType ={
    onChange: (value: string) => void
    value: string
    pressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void
    error?: string | null
    onBlur?: () => void
}

export const Input: React.FC<InputProsType> = (props) => {

    const newText = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    };


    return (
        <div>
            <input className={props.error ? `${style.input} ${style.error}` : style.input} type="text"
                   value={props.value}
                   onChange={newText}
                   onKeyPress={props.pressEnter}
                   autoFocus
                   onBlur={props.onBlur}
            />
        </div>
    )
};

