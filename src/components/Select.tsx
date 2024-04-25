import React, {useContext, useEffect, useState} from "react";
import {FilterContext, updateData, updateOptions} from "../tools/utils";
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

    // background - for close options pop-up
    const background = () => (
        <div className="select-background" onClick={() => setIsOpened(false)}/>
    );

    const option = (value: string) => (
        <label className="select-options__item" key={value}>
            <input type="checkbox" onChange={() => {
                setFilterArray(value)
            }}/>
            <p>{value}</p>
        </label>
    );

    return (
        <div className={isOpened ? "select-wrapper-active" : "select-wrapper"}>
            <div className="select" onClick={() => setIsOpened(!isOpened)}>
                <input className="select-input" type="text" onChange={(e) => {
                    setFilterString(e.target.value)

                    searchInUsers(e.target.value)
                }}/>
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
