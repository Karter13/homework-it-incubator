import React, {useState} from 'react';
import {EditableSpan} from '../common/EditableSpan/EditableSpan';
import style from './Junior.module.css'
import {Select} from '../common/Select/Select';
import {Radio} from '../common/Radio/Radio';
import {
    filterUsersAC,
    hwReducer,
    sortUsersUpAndDownAC,
    StateType
} from './Reduser/homeWork-reducer';
import {Button} from '../common/Button/Button';
import moment from 'moment';


export type SelectionsType = {
    id: number
    value: string
    name: string
}
export type RadioType = {
    id: number
    name: string
    checked: any | boolean
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
    const [users, setUsers] = useState<Array<StateType>>([
        {id: '1', name: 'Maikl', age: 44},
        {id: '2', name: 'Anna', age: 41},
        {id: '3', name: 'Alex', age: 22},
        {id: '4', name: 'Masha', age: 15},
    ]);

    //state for timer
    const [clock, setClock] = useState(moment().format('LTS'));
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<boolean>(false);

    //timer
    const startTimer = () => {
        clearInterval(timerId);
        let interval = setInterval(() => {
            setClock(moment().format('LTS'))
        }, 1000);
        setTimerId(+interval)
    };
    const stopTimer = () => {
        clearInterval(timerId);
        // setTimerId(0);
    };
    const showDate = () => {
        setDate(true);
        console.log('true')
    };
    const hideDate = () => {
        setDate(false);
        console.log('false')
    };

    //sort Users
    const sortUp = () => {
        const newUsers = hwReducer(users, sortUsersUpAndDownAC('up'));
        setUsers(newUsers);
    };
    const sortDown = () => {
        const newUsers = hwReducer(users, sortUsersUpAndDownAC('down'));
        setUsers(newUsers);
    };
    const showPeopleWhoAreEighteenOrOlder = () => {
        const newUsers = hwReducer(users, filterUsersAC(18));
        setUsers(newUsers);
    };

    //junior Radio
    const changeRadio = (id: number, value: any | boolean) => {
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
            <div className={style.buttons}>
                <Button click={sortUp} value={'sortUp'}/>
                <Button click={sortDown} value={'sortDown'}/>
                <Button click={showPeopleWhoAreEighteenOrOlder} value={'>= 18'}/>
            </div>

            <div>
                {
                    users.map(u => {
                        return (
                            <div key={u.id} className={style.user}>
                                <div className={style.name}>Name: {u.name}</div>
                                <div className={style.age}>Age: {u.age}</div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={style.timer}>

                <div className={style.clock} onMouseOver={showDate} onMouseOut={hideDate}>
                    {clock}
                    {date && <div className={style.date}>{moment().format('Do MMMM YYYY')}</div>}
                </div>

                <Button click={startTimer} value={'UPDATE'}/>
                <Button click={stopTimer} value={'STOP'}/>
            </div>

        </div>
    )
};
