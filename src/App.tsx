import React from 'react';
import {Header} from "./components/Header";
import {Select} from "./components/Select";
import {UserCard} from "./components/UserCard";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Select/>
                <div className="cards">
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                </div>
            </div>
        </div>
    );
}

export default App;
