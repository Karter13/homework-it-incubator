import styles from './Select.module.css'
import React, {ChangeEvent} from 'react'
import {SelectionsType} from '../../Junior/Junior';

export type SelectPropsType = {
    selections: Array<SelectionsType>
    value: string | undefined
    onChange: (value: string) => void

}

export const Select: React.FC<SelectPropsType> = React.memo( (props) => {

    let option = props.selections
        .map(s => <option key={s.id} value={s.value}>{s.name}</option>);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.currentTarget.value)
    };

    return (
        <select value={props.value} onChange={onChange} className={styles.item}>
            {option}
        </select>
    )
});
