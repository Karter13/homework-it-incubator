import {ActionsType} from './redux-store';

const CHANGE_THEME = 'CHANGE_THEME';

export type Theme = {
    theme: string
}

const initialState: Theme  = {
    theme: 'start'
};

export const themeJuniorPlusReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: action.theme
            }
        }
        default:
            return state;
    }
};

export const setTheme = (theme: string) => ({type: CHANGE_THEME, theme} as const);


