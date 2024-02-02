import { memo } from "react";

function SimpleTodo({ list, event }) {

    console.log("Simple Todo");

    return (
        <>
            <h3>Component Simple Todo</h3>
            <button className="btn btn-outline-dark btn-sm" onClick={event}>Ajouter</button>
            <ul className="mt-3">
                { list.map( (todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </>
    )
}

export default memo(SimpleTodo);