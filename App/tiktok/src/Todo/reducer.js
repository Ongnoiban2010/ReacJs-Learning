import {SET_JOB, ADD_JOB, DELETE_JOB, UP_ACTION, DOWN_ACTION} from './constans';

// 1.Init state
export const initState = 0;
export const initState2 = {
    job: '',
    jobs: []
}

// 3.Reducer: hàm
export const reducer = (state, action) => {
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

export const reducer2 = (state, action) => {
    let newState;
    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action.')
    }
}