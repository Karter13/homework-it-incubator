import {Provider} from 'react-redux';
import React from 'react';
import {combineReducers, createStore} from 'redux';
import {juniorReducer} from '../redux/junior-reducer';
import {themeJuniorPlusReducer} from '../redux/themeJuniorPlus-reducer';

const rootReducer = combineReducers({
    juniorPage: juniorReducer,
    theme: themeJuniorPlusReducer
});

export const storyBookStore = createStore(rootReducer);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>
};
