import React, {useCallback, useState} from 'react';
import style from './JuniorPlus.module.css'
import {Radio} from '../common/Radio/Radio';
import {RadioType} from '../Junior/Junior';
import {connect} from 'react-redux';
import {GlobalStateType} from '../../redux/redux-store';
import {setTheme, Theme} from '../../redux/themeJuniorPlus-reducer';

type JuniorPlusPropsype = {
    theme: Theme
    setTheme: (theme: string) => void

}

const JuniorPlus: React.FC<JuniorPlusPropsype> = (props) => {
    const [radioValue, setRadioValue] = useState<Array<RadioType>>([
        {id: 1, name: 'start', checked: true},
        {id: 2, name: 'Light', checked: false},
        {id: 3, name: 'Dark', checked: false},
    ]);


    // const [classNameStyle, setClassNameStyle] = useState<any>(style.container1);

    let classNameStyle = props.theme.theme === 'start' ? style.container1 : props.theme.theme === 'Light' ? style.container2 : style.container3;


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
        </div>

    )
};


const mapStateToProps = (store: GlobalStateType) => ({
    theme: store.theme
});

export default connect(mapStateToProps, {setTheme})(JuniorPlus);

