import {combineReducers, createStore} from 'redux';
import {juniorReducer, setLoading} from './junior-reducer';
import {setTheme, themeJuniorPlusReducer} from './themeJuniorPlus-reducer';
import {checkValueReducer, setValueCheckBox} from './request-reducer';

export type ActionsType = ReturnType<typeof setLoading>
    | ReturnType<typeof setTheme>
    | ReturnType<typeof setValueCheckBox>


let reducers = combineReducers({
    juniorPage: juniorReducer,
    theme: themeJuniorPlusReducer,
    juniorPlusCheckBox: checkValueReducer
});

export type GlobalStateType = ReturnType<typeof reducers>;

export let store = createStore(reducers);

// @ts-ignore
window.store = store;
