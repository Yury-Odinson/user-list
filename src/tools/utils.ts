import {CardProps, FilterType} from "./types";
import React from "react";

export const FilterContext: React.Context<FilterType> = React.createContext<FilterType>({
    filter: [],
    setFilter: (): void => { }
});

export const getData = async (): Promise<any> => {
    const dataURL = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(dataURL);
    return response.json();
};

export const updateData = (dataArr: CardProps[], filteredArr: string[]) => {
    return dataArr.filter(user => filteredArr.includes(user.name));
};

export const updateOptions = (fullData: string[], filteredData: string[]) => {
    return fullData.filter(user => filteredData.includes(user));
};
