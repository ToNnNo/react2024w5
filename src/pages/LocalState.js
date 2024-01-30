import { useState } from "react";
import Counter from "../components/Counter";
import CounterWithProps from "../components/CounterWithProps";

export default function LocalState() {

    let [value, setValue] = useState(0);

    return (
        <>
            <h1>Etat local d'un composant</h1>

            <h2>Version avec état local</h2>
            <Counter />

            <hr />

            <h2>Version avec props</h2>
            
            <CounterWithProps value={ value } setValue={ setValue } />
        </>
    );
}