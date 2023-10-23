import React from 'react';
import './App.css';
import Nasa from "./components/Nasa/Nasa";
import ClickerButton from "./components/ClickerButton/ClickerButton";
import ClickerButton2 from "./components/ClickerButton/ClickerButton2";

function App() {
    return (
        <div className="App">
            <Nasa/>
            <ClickerButton/>
            <ClickerButton2/>
        </div>
    );
}

export default App;
