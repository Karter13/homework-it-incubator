type StateType = {
    id: string,
    name: string,
    age: number
}
type ActionType = {
    type: string,
    payload: any
}

export const hwReducer = (state: Array<StateType>, action: ActionType) => {
    switch (action.type) {
        case 'SORT':
            if (action.payload === 'up') {
                debugger
                const sortUsers = [...state];
                sortUsers.sort((p, n) => {
                    if (p.name < n.name) return -1;
                    if (p.name > n.name) return 1;
                    return 0;
                });
                return sortUsers;
            } else if (action.payload === 'down') {
                debugger
                const sortUsers = [...state];
                sortUsers.sort((p, n) => {
                    if (n.name < p.name) return -1;
                    if (n.name > p.name) return 1;
                    return 0;
                });
                return sortUsers;
            }
        default:
            return state
    }

};
