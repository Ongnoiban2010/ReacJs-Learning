import { useReducer, useRef, useState } from "react"

// 1.Init state
const initState = 0
const initState2 = {
    job: '',
    jobs: []
}

// 2.Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// 3.Reducer: hàm
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

const reducer2 = (state, action) => {
    let newState;
    switch(action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        default:
            throw new Error('Invalid action.')
    }
    console.log('dispatch')
    return newState;
}

// 4. Dispatch

function UseReducer() {

    // lần đầu reducer sẽ ko đc gọi
    const [count, dispatch] = useReducer(reducer, initState);

    const [state, dispatch2] = useReducer(reducer2, initState2);
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