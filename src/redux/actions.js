import { ADD_TODO, TOGGLE_TODO, DELETE_ITEM, SET_FILTER } from './types'

let num = 0

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: num++,
    title: text,
    completed: false
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
})

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id
})

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
})
