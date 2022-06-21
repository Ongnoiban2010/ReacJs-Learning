import { useReducer, useState } from "react"

// Init state
const initState = 0

// Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer: hàm
const reducer = (state, action) => {
    console.log('reducer running...')
    switch(action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('invalid action')
    }
}

function UseReducer() {

    // lần đầu reducer sẽ ko đc gọi
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div style={{padding: '0 20px'}}>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >Down</button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >Up</button>
        </div>
    )
}

export default UseReducer