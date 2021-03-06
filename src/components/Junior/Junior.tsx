import React, {useCallback, useState} from 'react';
import {EditableSpan} from '../common/EditableSpan/EditableSpan';
import style from './Junior.module.css'
import {Select} from '../common/Select/Select';
import {Radio} from '../common/Radio/Radio';
import {filterUsersAC, hwReducer, sortUsersUpAndDownAC, StateType,} from './Reduser/homeWork-reducer';
import {Button} from '../common/Button/Button';
import moment from 'moment';
import {Preloader} from '../common/Preloader/Preloader';
import {GlobalStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {setLoading} from '../../redux/junior-reducer';
import {Range} from '../common/Range/Range';


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

//типизация пропсов
type ChangeLoadingType = {
    setLoading: (loading: boolean) => void
}
type LoadingType = {
    loading: boolean
}
type JuniorPropsType = ChangeLoadingType & LoadingType

const Junior: React.FC<JuniorPropsType> = (props) => {

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

    //state for Range
    const [valueRange, setValueRange] = useState<number | number[]>(1);

    //Range
    const onChangeRange = useCallback( (event: any, newValue: number | number[]) => {
        setValueRange(newValue);
    }, [] );


    //timer
    const startTimer = useCallback(() => {
        clearInterval(timerId);
        let interval = setInterval(() => {
            setClock(moment().format('LTS'))
        }, 1000);
        setTimerId(+interval)
    }, []);
    const stopTimer = useCallback(() => {
        clearInterval(timerId);
        // setTimerId(0);
    }, [timerId]);
    const showDate = useCallback(() => {
        setDate(true);
    }, []);
    const hideDate = useCallback(() => {
        setDate(false);
    }, []);

    //sort Users
    const sortUp = useCallback(() => {
        const newUsers = hwReducer(users, sortUsersUpAndDownAC('up'));
        setUsers(newUsers);
    }, [users]);
    const sortDown = useCallback(() => {
        const newUsers = hwReducer(users, sortUsersUpAndDownAC('down'));
        setUsers(newUsers);
    }, [users]);
    const showPeopleWhoAreEighteenOrOlder = useCallback(() => {
        const newUsers = hwReducer(users, filterUsersAC(18));
        setUsers(newUsers);
    }, []);

    //junior Radio
    const changeRadio = useCallback((id: number, value: any | boolean) => {
        radioValue.map(r => {
            if (r.id === id) {
                r.checked = !r.checked;
                setRadioValue([...radioValue]);
            } else {
                r.checked = false;
            }
        });
    }, []);
    //junior selector
    const selections: Array<SelectionsType> = [
        {id: 1, value: '1', name: 'React'},
        {id: 2, value: '2', name: 'Redux'},
        {id: 3, value: '3', name: 'JS'},
        {id: 4, value: '4', name: 'Angular'},
    ];
    const onChangeSelect = useCallback((value: string) => {
        setParentValue(value);
    }, []);

    const onChange = useCallback((value: string) => {
        if (value.trim()) {
            setValue(value);
        } else {
            alert('error');
            setError('error');
        }
    }, [value]);

    //localStorage
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

    const getDataFromStore = useCallback( () => {
        const newValue: string = restoreState<string>('test', '0');
        setValue(newValue);
    }, []);

    //LOADER
    const showLoader = useCallback(() => {
        props.setLoading(true);
        setTimeout(() => {
            props.setLoading(false);
        }, 3000)
    }, []);

    return (
        <>
            {
                props.loading
                    ? <Preloader/>
                    : <div className={style.main}>
                        <h3>Junior</h3>

                        <div className={style.loader}>
                            <Button click={showLoader} value={'LOADER'}/>
                        </div>

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

                        <Range minValue={0}
                               maxValue={100}
                               value={valueRange}
                               onChange={onChangeRange}
                        />

                    </div>
            }
        </>
    )
};

const mapStateToProps = (store: GlobalStateType) => {
    return {
        loading: store.juniorPage.loading
    }
};
export default connect(mapStateToProps, {setLoading})(Junior)
