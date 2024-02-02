import { useMemo, useState } from "react";

const longCalculation = (number) => {
    console.log("En cours de calcul ...");
    for(let i = 0; i<1000000000; i++) {
        number += 1; 
    }

    return number;
}

export default function HookMemo() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const result = useMemo(() => { return longCalculation(count) }, [count]); 

    function increment() {
        setCount( count + 1 )
    }

    function addTodo() {
        setTodos( [...todos, "New Todo"] )
    }

    return (
        <>
            <h1>Hook Memo</h1>

            <div className="row">
                <div className="col">
                    <h2>TodoList</h2>
                    <button className="btn btn-outline-dark btn-sm" onClick={addTodo}>Ajouter</button>
                    <ul className="mt-3">
                    { todos.map( (todo, index) => {
                        return <li key={index}>{todo}</li>
                    })}
                    </ul>
                </div>
                <div className="col">
                    <h2>Counter</h2>
                    <button className="btn btn-outline-dark btn-sm" onClick={increment}>+1</button>

                    <p>{count}</p>

                    <h2>Calcul Couteux</h2>
                    { result }
                </div>
            </div>
        </>
    );

}