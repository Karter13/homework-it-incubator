import React, {useCallback, useState} from 'react';
import style from './JuniorPlus.module.css'
import {Radio} from '../common/Radio/Radio';
import {RadioType} from '../Junior/Junior';
import {connect} from 'react-redux';
import {GlobalStateType} from '../../redux/redux-store';
import {setTheme} from '../../redux/themeJuniorPlus-reducer';

export const JuniorPlus = () => {
    const [radioValue, setRadioValue] = useState<Array<RadioType>>([
        {id: 1, name: 'start', checked: true},
        {id: 2, name: 'Light', checked: false},
        {id: 3, name: 'Dark', checked: false},
    ]);

    // let classNameStyle = props.currentTheme.name === 'start' ? style.container1:  props.currentTheme.name === 'Light' ?  style.container2:  style.container3

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


    return (
        <div className={style.container}>
            <h1>JuniorPlus</h1>
            <Radio radioValue={radioValue} onChange={changeRadio}/>
        </div>

    )
};


const mapStateToProps = (store: GlobalStateType) => ({
    theme: store.theme.theme
});


export default connect(mapStateToProps, {setTheme})(JuniorPlus);

