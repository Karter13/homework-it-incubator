import {ActionsType} from './redux-store';

const CHANGE_THEME = 'CHANGE_THEME';

type Theme = {
    theme: {
        color: string | null,
        backgroundColor: string | null,
    }
}
// type ThemeJuniorPlusType = {
//     light: Theme
//     dark: Theme
// }

const initialState: Theme = {
    theme: {
        color: 'black',
        backgroundColor: '#a2a4a9'
    }

    // light: {
    //     color: 'black',
    //     backgroundColor: 'white'
    // },
    // dark: {
    //     color: 'white',
    //     backgroundColor: 'black'
    // },
};

export const themeJuniorPlusReducer = (state: Theme = initialState, action: ActionsType) => {
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


