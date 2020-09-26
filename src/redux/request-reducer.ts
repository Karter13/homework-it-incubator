import {ActionsType} from './redux-store';

const CHANGE_VALUE_CHECKBOX = 'CHANGE_VALUE_CHECKBOX';

export type Value = {
    success: boolean
}

const initialState: Value = {
    success: false
};

export const checkValueReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case CHANGE_VALUE_CHECKBOX: {
            return {
                ...state,
                success: action.success
            }
        }
        default:
            return state;
    }
};

export const setValueCheckBox = (success: boolean) => ({type: CHANGE_VALUE_CHECKBOX, success} as const);



