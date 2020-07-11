import React, {useState} from 'react';
import './App.css';
import {Image} from "./components/Image/Image";
import {Message} from "./components/Message/Message";
import {Affairs, AffairsType} from "./components/Affairs/Affairs";
import {Greeting} from "./components/Greeting/Greeting";
import {v1} from "uuid";
import {log} from "util";

function App() {
    let [affairs, setAffairs] = useState<Array<AffairsType>>(
        [
            {id: 1, name: "Job", priority: "middle"},
            {id: 2, name: "Learning react", priority: "high"},
            {id: 3, name: "Learning English", priority: "high"},
            {id: 4, name: "Learning HTML", priority: "middle"},
            {id: 5, name: "Fishing", priority: "low"}
        ]
    );

    let [filter, setFilter] = useState('all');
    let [names, setNames] = useState([
        {id: v1(), name: 'Maikl'}
    ]);

    function addName(name: string) {
        if(name && name.trim()) {
            alert(`Hello ${name}!!`);
            let newName = {id: v1(), name: name};
            let newNames = [newName, ...names];
            setNames(newNames);
        } else {
            alert('Enter name please!!!')
        }
    }


    function removeBusiness(id: number) {
        let newAffairs = affairs.filter(b => b.id !== id );
        setAffairs(newAffairs);
    }
    function filterAffairs(value: string) {
        setFilter(value);
    }

    let tasksForAffairs = affairs;
    if(filter === 'high') {
        tasksForAffairs = affairs.filter(a => a.priority === 'high')
    }
    if(filter === 'middle') {
        tasksForAffairs = affairs.filter(a => a.priority === 'middle')
    }
    if(filter === 'low') {
        tasksForAffairs = affairs.filter(a => a.priority === 'low')
    }

    return (
        <div className="App">
            <div className="message">
                <Image url='https://live.staticflickr.com/1170/5152497387_939ee3015a_b.jpg'/>
                <Message myName='Michael' myText='I love React!!!' realTime='19.40'/>
            </div>
            <Affairs affairs={tasksForAffairs}
                     removeBusiness={removeBusiness}
                     filterAffairs={filterAffairs}
            />
            <Greeting addName={addName} names={names}/>
        </div>
    );
}

export default App;
