import {hwReducer} from './homeWork-reducer';

test('hw reducer should return the sorted array by ascending name', () => {
    const startState = [
        {id: '1', name: 'Maikl', age: 44},
        {id: '2', name:'Anna',  age: 41},
        {id: '3', name:'Alex',  age: 22},
        {id: '4', name:'Masha',  age: 15},
        ];

    const newUser = [
        {id: '3', name:'Alex',  age: 22},
        {id: '2', name:'Anna',  age: 41},
        {id: '1', name:'Maikl', age: 44},
        {id: '4', name:'Masha',  age: 15}
    ];

    const endState = hwReducer(startState, {type: 'SORT', payload: 'up'});

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

    const newUser = [
        {id: '4', name:'Masha',  age: 15},
        {id: '1', name:'Maikl', age: 44},
        {id: '2', name:'Anna',  age: 41},
        {id: '3', name:'Alex',  age: 22},
    ];

    const endState = hwReducer(startState, {type: 'SORT', payload: 'down'});

    expect(endState[0].name).toBe(startState[3].name);
    expect(endState).toEqual(newUser);
});
