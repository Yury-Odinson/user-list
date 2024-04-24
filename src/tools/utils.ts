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

export const getData = async () => {
    const dataURL = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(dataURL);
    return response.json();
};
