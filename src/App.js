import React from 'react'
import { AddTodo, TodoList, ToggleView } from './js/components'

const App = () => {
  return (
    <div className="todo-app">
      <h2 className="todo-app__title">Task list</h2>
      <AddTodo />
      <hr />
      <TodoList />
      <hr />
      <ToggleView />
    </div>
  )
}

export default App
