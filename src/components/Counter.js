import { useState } from "react";

export default function Counter() {

    let [value, setValue] = useState(0);

    function decrease() {
        setValue(value - 1);
    }

    function increase() {
        setValue(value + 1);
    }

    return (
        <>
            <button className="btn btn-outline-secondary" onClick={ () => decrease() }>
                <i className="bi bi-dash"></i>
            </button>
            <span className="px-5">
                { value }
            </span>
            <button className="btn btn-outline-secondary" onClick={ () => increase() }>
                <i className="bi bi-plus"></i>
            </button>
        </>
    );

}