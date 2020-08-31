import {combineReducers, createStore} from 'redux';
import {juniorReducer, setLoading} from './junior-reducer';

export type ActionsType = ReturnType<typeof setLoading>


let reducers = combineReducers({
    juniorPage: juniorReducer
});

export type GlobalStateType = ReturnType<typeof reducers>;

export let store = createStore(reducers);

// @ts-ignore
window.store = store;
