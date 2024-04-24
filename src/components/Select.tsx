import React, {useEffect, useState} from "react";
import {SelectProps} from "../tools/utils";

export const Select: React.FC<SelectProps> = ({names}) => {

    const [optionValues, setOptionValues] = useState(names);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    useEffect(() => {
        setOptionValues(names);
    }, [names]);

    const handlerChangeStyle = () => setIsOpened(!isOpened);

    const option = (value: string) => (
        <label className="select-options__item" key={value}>
            <input type="checkbox"/>
            <p>{value}</p>
        </label>
    );

    // background - for close options pop-up
    const background = () => (
        <div className="select-background" onClick={() => setIsOpened(false)}/>
    );

    return (
        <>
            <div className={isOpened ? "select-wrapper-active" : "select-wrapper"}>


                <div className="select" onClick={handlerChangeStyle}>
                    <input className="select-input" type="text"/>
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
