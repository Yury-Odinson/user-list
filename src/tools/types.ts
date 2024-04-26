import {Dispatch, SetStateAction} from "react";

export type FilterType = {
    filter: string[];
    setFilter: Dispatch<SetStateAction<string[]>>
};

export type CardProps = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
};

export type SelectProps = {
    names: string[];
};
