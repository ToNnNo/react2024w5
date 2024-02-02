import { useCallback, useRef, useState } from "react";
import SimpleTodo from "../components/SimpleTodo";

export default function HookCallback() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    let number = useRef(1);

    function increment() {
        setCount( count + 1 )
    }

    function incrementRef() {
        number.current += 1;
    }

    const addTodo = useCallback( () => {
        setTodos( [...todos, `New Todo ${number.current}`] )
        number.current += 1;
    }, [todos]);

    return (
        <>
            <h1>Hook Callback</h1>

            <div className="row">
                <div className="col">
                    <h2>TodoList</h2>
                    <SimpleTodo list={todos} event={addTodo} />

                    <button className="btn btn-outline-dark btn-sm" onClick={incrementRef}>Ref +1</button>

                    <span className="ps-3">{number.current}</span>
                </div>
                <div className="col">
                    <h2>Counter</h2>
                    <button className="btn btn-outline-dark btn-sm" onClick={increment}>+1</button>

                    <p>{count}</p>
                </div>
            </div>
        </>
    );

}