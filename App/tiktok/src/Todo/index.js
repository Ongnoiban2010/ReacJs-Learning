import { useReducer, useRef, useState } from "react"
import {DOWN_ACTION, UP_ACTION} from './constans';
import {setJob, addJob, deleteJob, } from './action';
import {reducer, reducer2, initState, initState2} from './reducer';
import logger from './logger';

// 4. Dispatch

function UseReducer() {

    // lần đầu reducer sẽ ko đc gọi
    const [count, dispatch] = useReducer(reducer, initState);

    const [state, dispatch2] = useReducer(logger(reducer2), initState2);
    const {job, jobs} = state;
    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch2(addJob(job))
        dispatch2(setJob(''))
        inputRef.current.focus();
    }

    console.log('re-render')

    return (
        <div style={{padding: '0 20px'}}>
            <div>
                <h1>{count}</h1>
                <button
                    onClick={() => dispatch(DOWN_ACTION)}
                >Down</button>
                <button
                    onClick={() => dispatch(UP_ACTION)}
                >Up</button>
            </div>
            <br/>
            <h3>Todo</h3>
            <input 
                value={job}
                placeholder="Enter todo..."
                onChange={(e) => {
                    dispatch2(setJob(e.target.value))
                }}
                ref={inputRef}
            />
            <button
                onClick={handleSubmit}
            >Add</button>
            <ul>
                {jobs.map((j, index) => (
                    <li key={index}>{j} <span onClick={() => dispatch2(deleteJob(index))}>&times;</span></li>
                ))}
            </ul>
        </div>
    )
}

export default UseReducer