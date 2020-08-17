import {filterUsersAC, hwReducer, sortUsersDownAC, sortUsersUpAC} from './homeWork-reducer';

test('hw reducer should return the sorted array by ascending name', () => {
    const startState = [
        {id: '1', name: 'Maikl', age: 44},
        {id: '2', name:'Anna',  age: 41},
        {id: '3', name:'Alex',  age: 22},
        {id: '4', name:'Masha',  age: 15},
        ];

    const payload = 'up';

    const newUser = [
        {id: '3', name:'Alex',  age: 22},
        {id: '2', name:'Anna',  age: 41},
        {id: '1', name:'Maikl', age: 44},
        {id: '4', name:'Masha',  age: 15}
    ];

    const endState = hwReducer(startState, sortUsersUpAC(payload));

    expect(endState[0].name).toBe(startState[2].name);
    expect(endState).toEqual(newUser);
});

test('hw reducer should return the sorted array by descending name', () => {
    const startState = [
        {id: '1', name: 'Maikl', age: 44},
        {id: '2', name:'Anna',  age: 41},
        {id: '3', name:'Alex',  age: 22},
        {id: '4', name:'Masha',  age: 15},
    ];

    const payload = 'down';

    const newUser = [
        {id: '4', name:'Masha',  age: 15},
        {id: '1', name:'Maikl', age: 44},
        {id: '2', name:'Anna',  age: 41},
        {id: '3', name:'Alex',  age: 22},
    ];

    const endState = hwReducer(startState, sortUsersDownAC(payload));

    expect(endState[0].name).toBe(startState[3].name);
    expect(endState).toEqual(newUser);
});

test('hw reducer should return  an array of people who are 18 years old', () => {
    const startState = [
        {id: '1', name: 'Maikl', age: 44},
        {id: '2', name:'Anna',  age: 41},
        {id: '3', name:'Alex',  age: 22},
        {id: '4', name:'Masha',  age: 15},
    ];

    const payload = 18;

    const newUser = [
        {id: '1', name: 'Maikl', age: 44},
        {id: '2', name:'Anna',  age: 41},
        {id: '3', name:'Alex',  age: 22},
    ];

    const endState = hwReducer(startState, filterUsersAC(payload));

    expect(endState[1].name).toBe(startState[1].name);
    expect(endState).toEqual(newUser);

});
