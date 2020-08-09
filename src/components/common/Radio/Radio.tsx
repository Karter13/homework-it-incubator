import styles from './Radio.module.css'
import React, {ChangeEvent} from 'react';

export type RadioPropsType = {
    name: string
    value: boolean
    onChange: (check:boolean) => void
}

export const Radio: React.FC<RadioPropsType> = (props) => {

    const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.checked)
    };
    return (
        <div>
            <div className={styles.radio}>
                <input type="radio" checked={false} onChange={onChangeRadio}/>
                <span>Radio</span>
            </div>

        </div>


    )
};
