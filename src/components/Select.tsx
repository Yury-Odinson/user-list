import {useState} from "react";

export const Select = () => {

    const [isOpened, setIsOpened] = useState<boolean>(false);

    const changeStyle = () => isOpened ? "select-wrapper-active" : "select-wrapper";
    const handlerChangeStyle = () => setIsOpened(!isOpened);

    return (
        <label>
            <div className={changeStyle()}>
                <select name="select-name" className="select" onClick={handlerChangeStyle}>
                    <option value="1">Select name</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </label>
    );
};
