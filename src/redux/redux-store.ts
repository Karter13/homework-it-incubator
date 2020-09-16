import {combineReducers, createStore} from 'redux';
import {juniorReducer, setLoading} from './junior-reducer';
import {setTheme, themeJuniorPlusReducer} from './themeJuniorPlus-reducer';

export type ActionsType = ReturnType<typeof setLoading> | ReturnType<typeof setTheme>


let reducers = combineReducers({
    juniorPage: juniorReducer,
    theme: themeJuniorPlusReducer
});

export type GlobalStateType = ReturnType<typeof reducers>;

export let store = createStore(reducers);

// @ts-ignore
window.store = store;
