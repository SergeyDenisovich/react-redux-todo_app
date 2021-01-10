import { TOGGLE_VIEW } from '../constants'

export const getTodosState = store => store.todos

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).todos : []

export const getTodos = store => getTodoList(store).map(todo => todo)

export const getTodosByToggleView = (store, toggleView) => {
  const allTodos = getTodos(store)
  switch (toggleView) {
    case TOGGLE_VIEW.COMPLETED:
      return allTodos.filter(todo => todo.completed)
    case TOGGLE_VIEW.INCOPLETE:
      return allTodos.filter(todo => !todo.completed)
    case TOGGLE_VIEW.ALL:
    default:
      return allTodos
  }
}
