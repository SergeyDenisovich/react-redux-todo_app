import { ADD_TODO, TOGGLE_TODO, DELETE_ITEM } from '../types'
import produce from 'immer'

const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_TODO: {
        draft.todos.push(action.payload)
        break
      }

      case TOGGLE_TODO: {
        draft.todos.map(todo =>
          todo.id == action.payload ? (todo.completed = !todo.completed) : todo
        )
        break
      }

      case DELETE_ITEM: {
        draft.todos = draft.todos.filter(todo => todo.id !== action.payload)
        break
      }
    }
  })
}

export default todos
