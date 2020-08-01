import React, {useState} from 'react';
import {EditableSpan} from '../common/EditableSpan/EditableSpan';

export type StateType = {
    x: string
    y: number
}

export const Junior = () => {

    let [value, setValue] = useState('EditableSpan');
    let [error, setError] = useState<string | null>(null);
    let [state, setState] = useState<Array<StateType>>([
        {x: value, y: 10}
    ]);

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

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    function getDataFromStore() {
        const newState: StateType = restoreState<StateType>('test', {x: '', y: 0});
        const newStates = [newState, ...state];
        console.log(newStates);

        setState(newStates);

    }


    return (
        <div>
            <h3>Junior</h3>
            <EditableSpan value={value}
                          onChange={onChange}
                          error={error}
            />
            <button onClick={() => {
                saveState<StateType>('test', {x: value, y: 2})
            }}>Save</button>
            <button onClick={() => {getDataFromStore()}}>Restore</button>
            <span>{state[0].x}</span>
        </div>
    )
}
