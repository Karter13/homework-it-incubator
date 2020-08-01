import React, {useState} from 'react';
import {EditableSpan} from '../common/EditableSpan/EditableSpan';
import style from './Junior.module.css'

export const Junior = () => {

    let [value, setValue] = useState('EditableSpan');
    let [error, setError] = useState<string | null>(null);

    const onChange = (value: string) => {
        if (value.trim()) {
            setValue(value);
        } else {
            alert('error');
            setError('error');
        }
    };

    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }
    function addDateForState() {
        saveState('test', value);
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }
    function getDataFromStore() {
        const newValue: string = restoreState<string>('test', '0');
        console.log(newValue);
        setValue(newValue);
    }


    return (
        <div className={style.main}>
            <h3>Junior</h3>
            <EditableSpan value={value}
                          onChange={onChange}
                          error={error}
            />
            <button onClick={ addDateForState }>Save</button>
            <button onClick={ getDataFromStore }>Restore</button>
        </div>
    )
};
