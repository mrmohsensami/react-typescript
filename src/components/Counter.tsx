import { useReducer } from 'react';

const initialState = { count: 0 };

type CounterState = {
    count: number;
};
type updateAction = {
    type: 'increment' | 'decrement';
    payload: number;
};
type ResetAction = {
    type: 'reset';
};
type CounterAction = updateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>decrement 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default Counter;
