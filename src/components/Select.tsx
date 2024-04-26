import React, {useContext, useEffect, useState} from "react";
import {FilterContext, updateOptions} from "../tools/utils";
import {SelectProps} from "../tools/types";

export const Select: React.FC<SelectProps> = ({names}) => {

    const [optionValues, setOptionValues] = useState(names);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [filterString, setFilterString] = useState("");

    const filter = useContext(FilterContext);

    useEffect(() => {
        if (filterString === "") {
            setOptionValues(names);
        } else {
            updateOptions(names, filter.filter);
        }
    }, [filter.filter, names, filterString]);

    const searchInUsers = (value: string) => {
        setFilterString(value);
        const filteredNames = names.filter(name => {
            return name.toLowerCase().includes(value.toLowerCase())
        });
        setOptionValues(filteredNames);
    }

    const setFilterArray = (value: string) => {
        const filteredArray = filter.filter;
        if (filteredArray.includes(value)) {
            filter.setFilter(filteredArray.filter(item => item !== value));
            // updateData()
        } else {
            filter.setFilter([...filteredArray, value]);
        }
    };

    const getFirstName = () => {
        const firstWords = filter.filter.map(e => {
            const firstNames = e.split(" ");
            return firstNames[0];
        });
        return firstWords.join(", ");
    };

    // background - for close options pop-up
    const background = () => (
        <div className="select-background" onClick={() => setIsOpened(false)}/>
    );

    const option = (value: string) => (
        <div className="checkbox-area" key={value}>
            <label className="select-options__item">
                <input className="default-checkbox" type="checkbox" onChange={() => {
                    setFilterArray(value)
                }}/>
                <span className="custom-checkbox"/>
                <p>{value}</p>
            </label>
        </div>
    );

    return (
        <div className={isOpened ? "select-wrapper-active" : "select-wrapper"}>
            <div className="select">
                <input className="select-input" type="text"
                       onChange={(e) => {
                           searchInUsers(e.target.value);
                       }}
                       onClick={() => setIsOpened(!isOpened)}
                />
                <div className="select-description">
                    <p className="select-description__item">Filter: {filter.filter.length}</p>
                    <button className="select-description__button" onClick={() => filter.setFilter([])}>
                        clear all
                    </button>
                </div>
                <div className="select-description-details">
                    <p>Name:
                        <span>
                            {getFirstName()}
                        </span>
                    </p>
                </div>
                <div className={isOpened ? "select-options-active" : "select-options"}>
                    {
                        optionValues?.map((e) => (
                            option(e)
                        ))
                    }
                    {isOpened ? background() : null}
                </div>
            </div>
        </div>
    );
};
