import {SET_TODO_INPUT, ADD_TODO} from './constants'

export const setTOdoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodos = payload => ({
    type: ADD_TODO,
    payload
})