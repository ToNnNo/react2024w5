import { useReducer } from "react";
import Button from "./Button/Button";
import Icon from "./Button/Icon";

function reducer(value, action) {
    const step = action.step || 1;

    switch(action.type) {
        case 'decrease': 
            return value - step;
        case 'increase':
            return value + step;
        case 'reset': 
            return 0;
        default:
            return value;
    }
}

export default function CounterReducer() {

    const [value, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <Button className="btn btn-outline-dark" onClick={() => dispatch({ type: 'decrease', step: 2 }) }>
                <Icon iconName="dash" />
            </Button>
            <span className="px-5">{ value }</span>
            <Button className="btn btn-outline-dark" onClick={() => dispatch({ type: 'increase' }) }>
                <Icon iconName="plus" />
            </Button>
            <Button className="btn btn-outline-secondary ms-3" onClick={() => dispatch({ type: 'reset' }) }>
                Reset
            </Button>
        </>
    );

}