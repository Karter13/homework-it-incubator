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

export const Junior = () => {

    const [value, setValue] = useState('EditableSpan');
    const [error, setError] = useState<string | null>(null);
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const [radioValue, setRadioValue] = useState<boolean>(false);

    //junior Radio
    const changeRadio = (value: boolean) => {
        setRadioValue(!value);
        console.log(radioValue)
    };

    //junior selector
    const selections: Array<SelectionsType> = [
        {id: 1, value: '1', name: 'React' },
        {id: 2, value: '2', name: 'Redux' },
        {id: 3, value: '3', name: 'JS' },
        {id: 4, value: '4', name: 'Angular' },
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
            <button onClick={ addDateForState }>Save</button>
            <button onClick={ getDataFromStore }>Restore</button>
            <br/>
            <Select onChange={onChangeSelect} value={parentValue} selections={selections}/>
            <br/>
            <Radio value={radioValue} onChange={changeRadio} name={'Maikl'}/>
        </div>
    )
};
