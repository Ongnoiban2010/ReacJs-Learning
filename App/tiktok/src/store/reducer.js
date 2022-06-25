import {SET_TODO_INPUT, ADD_TODO} from './constants'

// 1. init state
const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch(action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, state.todoInput]
            }
        default:
            throw new Error('Invalid case')
    }
}

export {initState}
export default reducer