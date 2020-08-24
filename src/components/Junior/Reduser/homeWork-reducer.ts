export type StateType = {
    id: string,
    name: string,
    age: number
}
export type ActionType = {
    type: string,
    payload: any
}

const SORT = 'SORT';
const CHECK = 'CHECK';

export const hwReducer = (state: Array<StateType>, action: ActionType) => {
    switch (action.type) {
        case SORT:
            if (action.payload === 'up') {
                const sortUsers = [...state];
                sortUsers.sort((p, n) => {
                    if (p.name < n.name) return -1;
                    if (p.name > n.name) return 1;
                    return 0;
                });
                return sortUsers;
            } else if (action.payload === 'down') {
                const sortUsers = [...state];
                sortUsers.sort((p, n) => {
                    if (n.name < p.name) return -1;
                    if (n.name > p.name) return 1;
                    return 0;
                });
                return sortUsers;
            }
            return state;
        case CHECK:
            return state.filter(u => u.age >= action.payload);
        default:
            throw new Error('Error!!!');
    }
};

export const sortUsersUpAndDownAC = (payload: any): ActionType =>( {type: SORT, payload: payload});
export const filterUsersAC = (payload: any): ActionType =>( {type: CHECK, payload: payload});
