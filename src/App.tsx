import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import {Select} from "./components/Select";
import {UserCard} from "./components/UserCard";
import {cardProps, getData} from "./tools/utils";

function App() {

    const [data, setData] = useState<cardProps[]>([]);

    useEffect(() => {
        getData().then((cards) => setData(cards));
    },[]);

    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Select/>
                <div className="cards">
                    {
                        data?.map((card: cardProps) => (
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
