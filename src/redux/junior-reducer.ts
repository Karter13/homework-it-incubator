import {ActionsType} from './redux-store';

const SET_LOADING = 'SET_LOADING';

export type JuniorPageType = {
    loading: boolean
}
const initialState: JuniorPageType = {
    loading: false
};


export const juniorReducer = (state: JuniorPageType = initialState, action: ActionsType): JuniorPageType => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state;
    }
};

export const setLoading = (loading: boolean) => ({type: SET_LOADING, loading} as const);


