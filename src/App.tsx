import React from 'react';
import {Header} from "./components/Header";
import {Select} from "./components/Select";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Select/>
            </div>
        </div>
    );
}

export default App;
