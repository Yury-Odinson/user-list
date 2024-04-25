import React, {useContext, useEffect, useState} from "react";
import {FilterContext} from "../tools/utils";
import {SelectProps} from "../tools/types";

export const Select: React.FC<SelectProps> = ({names}) => {

    const [optionValues, setOptionValues] = useState(names);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [filterString, setFilterString] = useState("");

    const filter = useContext(FilterContext);

    useEffect(() => {
        if (filter.filter.length <= 0) {
            setOptionValues(names);
        } else {
            setOptionValues(filter.filter);
        }
    }, [filter.filter, names, filterString]);

    const handlerChangeStyle = () => setIsOpened(!isOpened);

    const option = (value: string) => (
        <label className="select-options__item" key={value}>
            <input type="checkbox"/>
            <p>{value}</p>
        </label>
    );

    const searchInUsers = (value: any) => {
        setFilterString(value);
        const filteredNames = names.filter(name => {
            return name.toLowerCase().includes(value.toLowerCase())
        });
        filter.setFilter(filteredNames);
        setOptionValues(filter.filter);
    };

    // background - for close options pop-up
    const background = () => (
        <div className="select-background" onClick={() => setIsOpened(false)}/>
    );

    return (
        <>
            <div className={isOpened ? "select-wrapper-active" : "select-wrapper"}>


                <div className="select" onClick={handlerChangeStyle}>
                    <input className="select-input" type="text" onChange={(e) => {
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
        </>
    );
};
