import React from 'react';
import './App.css';
import {Image} from "./components/Image/Image";
import {Message} from "./components/Message/Message";

function App() {
  return (
    <div className="App">
          <Image url='https://live.staticflickr.com/1170/5152497387_939ee3015a_b.jpg'/>
          <Message myName='Michael' myText='I love React!!!' realTime='19.40' />
    </div>
  );
}

export default App;
