import React, {useState} from 'react';
import {EditableSpan} from '../common/EditableSpan/EditableSpan';
import style from './Junior.module.css'
import {Select} from '../common/Select/Select';
import {Radio} from '../common/Radio/Radio';

export type SelectionsType = {
    id: number
    value: string
    name: string
}
export type RadioType = {
    id: number
    name: string
    checked: boolean
}

export const Junior = () => {

    const [value, setValue] = useState('EditableSpan');
    const [error, setError] = useState<string | null>(null);
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const [radioValue, setRadioValue] = useState<Array<RadioType>>([
        {id: 1, name: 'Radio1', checked: false},
        {id: 2, name: 'Radio2', checked: false},
        {id: 3, name: 'Radio3', checked: false},
    ]);

    //junior Radio
    const changeRadio = (id: number, value: any) => {
        radioValue.map(r => {
            if (r.id === id) {
                r.checked = !r.checked;
                setRadioValue([...radioValue]);
            } else {
                r.checked = false;
            }
        });
    };

    //junior selector
    const selections: Array<SelectionsType> = [
        {id: 1, value: '1', name: 'React'},
        {id: 2, value: '2', name: 'Redux'},
        {id: 3, value: '3', name: 'JS'},
        {id: 4, value: '4', name: 'Angular'},
    ];
    const onChangeSelect = (value: string) => {
        setParentValue(value);
    };

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
            <button onClick={addDateForState}>Save</button>
            <button onClick={getDataFromStore}>Restore</button>
            <br/>
            <Select onChange={onChangeSelect} value={parentValue} selections={selections}/>
            <br/>

            <Radio radioValue={radioValue} onChange={changeRadio}/>
        </div>
    )
};
