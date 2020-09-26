import React, {useCallback, useState} from 'react';
import style from './JuniorPlus.module.css'
import {Radio} from '../common/Radio/Radio';
import {RadioType} from '../Junior/Junior';
import {connect} from 'react-redux';
import {GlobalStateType} from '../../redux/redux-store';
import {setTheme, Theme} from '../../redux/themeJuniorPlus-reducer';
import {Request} from './Request';
import {setValueCheckBox} from '../../redux/request-reducer';

type JuniorPlusPropsype = {
    theme: Theme
    setTheme: (theme: string) => void
    success: boolean
    setValueCheckBox: (checkValue: boolean) => void

}

const JuniorPlus: React.FC<JuniorPlusPropsype> = (props) => {
    const [radioValue, setRadioValue] = useState<Array<RadioType>>([
        {id: 1, name: 'start', checked: true},
        {id: 2, name: 'light', checked: false},
        {id: 3, name: 'dark', checked: false},
    ]);

    // let classNameStyle = props.theme.theme === 'start' ? style.container1 : props.theme.theme === 'Light' ? style.container2 : style.container3;

    const classNameStyle = style[props.theme.theme];

    const changeRadio = useCallback((id: number, value: any | boolean) => {
        radioValue.map(r => {
            if (r.id === id) {
                r.checked = !r.checked;
                setRadioValue([...radioValue]);
                props.setTheme(r.name)
            } else {
                r.checked = false;
            }
        });
    }, [radioValue]);


    return (
        <div className={`${style.container} ${classNameStyle}`}>
            <h1>JuniorPlus</h1>
            <Radio radioValue={radioValue} onChange={changeRadio}/>
            <Request success={props.success} setValueCheckBox={props.setValueCheckBox}/>
        </div>

    )
};


const mapStateToProps = (store: GlobalStateType) => ({
    theme: store.theme,
    success: store.juniorPlusCheckBox.success
});

export default connect(mapStateToProps, {setTheme, setValueCheckBox})(JuniorPlus);

