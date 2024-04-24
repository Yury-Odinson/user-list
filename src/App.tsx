import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import {Select} from "./components/Select";
import {UserCard} from "./components/UserCard";
import {CardProps, getData} from "./tools/utils";

function App() {

    const [data, setData] = useState<CardProps[]>([]);
    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        getData().then((cards: CardProps[]) => {
            setData(cards);
            const namesArray = cards.map(card => card.name);
            setNames(namesArray);
        });
    }, []);

    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                {names ? <Select names={names}/> : ""}
                <div className="cards">
                    {
                        data?.map((card: CardProps) => (
                            <UserCard
                                id={card.id}
                                name={card.name}
                                username={card.username}
                                email={card.email}
                                address={card.address}
                                phone={card.phone}
                                website={card.website}
                                company={card.company}
                                key={card.id}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
