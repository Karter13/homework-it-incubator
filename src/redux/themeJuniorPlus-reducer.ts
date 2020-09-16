import {ActionsType} from './redux-store';

const CHANGE_THEME = 'CHANGE_THEME';

type Theme = {
    color: string
    backgroundColor: string
}
type ThemeJuniorPlusType = {
    light: Theme
    middle: Theme
    dark: Theme
}

const initialState = {
    light: {
        color: 'black',
        backgroundColor: 'white'
    },
    middle: {
        color: 'black',
        backgroundColor: 'white'
    },
    dark: {
        color: 'white',
        backgroundColor: 'black'
    },
};

export const themeJuniorPlusReducer = (state: ThemeJuniorPlusType = initialState, action: ActionsType) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,

            }
        }
        default:
            return state;
    }
};

export const setTheme = (theme: string) => ({type: CHANGE_THEME, theme} as const);


