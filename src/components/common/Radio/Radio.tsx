import styles from './Radio.module.css'
import React, {ChangeEvent} from 'react';
import {RadioType} from '../../Junior/Junior';

export type RadioPropsType = {
    radioValue: Array<RadioType>
    onChange: (id: number, check:any | boolean) => void
}

export const Radio: React.FC<RadioPropsType> = React.memo( (props) => {

    return (
        <div className={styles.radio}>
            {
                props.radioValue.map(r => {

                    const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
                        let check = e.currentTarget.checked;
                        props.onChange(r.id, check);
                    };


                    return (
                        <label key={r.id}>
                            <input type="radio" checked={r.checked} onChange={onChangeRadio}/>
                            {r.name}
                        </label>
                    )
                })
            }
        </div>
    )
});
