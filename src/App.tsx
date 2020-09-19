import React, {useState} from 'react';
import './App.css';
import {AffairsType} from './components/PreJunior/Affairs/Affairs';
import {NameType} from './components/PreJunior/Greeting/Greeting';
import {v1} from 'uuid';
import {Route} from 'react-router-dom';
import {Navbar} from './components/Navbar/Navbar';
import Junior from './components/Junior/Junior';
import JuniorPlus from './components/JuniorPlus/JuniorPlus';
import {PreJunior} from './components/PreJunior/PreJunior';


export function App() {
    let [affairs, setAffairs] = useState<Array<AffairsType>>(
        [
            {id: 1, name: 'Job', priority: 'middle'},
            {id: 2, name: 'Learning react', priority: 'high'},
            {id: 3, name: 'Learning English', priority: 'high'},
            {id: 4, name: 'Learning HTML', priority: 'middle'},
            {id: 5, name: 'Fishing', priority: 'low'}
        ]
    );

    let [filter, setFilter] = useState<string>('all');
    let [names, setNames] = useState<Array<NameType>>([
        {id: v1(), name: 'Maikl'}
    ]);
    let [error, setError] = useState<string | null>(null);

    function addName(name: string) {
        if (name && name.trim()) {
            alert(`Hello ${name}!!`);
            let newName = {id: v1(), name: name};
            let newNames = [newName, ...names];
            setNames(newNames);
        } else {
            setError('error');
            alert('Enter name please!!!')
        }
    }

    function removeBusiness(id: number) {
        let newAffairs = affairs.filter(b => b.id !== id);
        setAffairs(newAffairs);
    }

    function filterAffairs(value: string) {
        setFilter(value);
    }

    let tasksForAffairs = affairs;
    if (filter === 'high') {
        tasksForAffairs = affairs.filter(a => a.priority === 'high')
    }
    if (filter === 'middle') {
        tasksForAffairs = affairs.filter(a => a.priority === 'middle')
    }
    if (filter === 'low') {
        tasksForAffairs = affairs.filter(a => a.priority === 'low')
    }

    return (
        <div className="App">
            <Navbar/>
            <Route path={'/preJunior'} render={() => <PreJunior
                affairs={tasksForAffairs}
                removeBusiness={removeBusiness}
                filterAffairs={filterAffairs}
                addName={addName}
                names={names}
                error={error}
                setError={setError}
            />}/>
            <Route path={'/junior'} render={() => <Junior/>}/>
            <Route path={'/juniorPlus'} render={() => <JuniorPlus/>}/>
        </div>
    );
}



