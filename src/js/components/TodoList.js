import React from 'react'
import { connect } from 'react-redux'
import { getTodosByToggleView } from '../../redux/selectors'
import { deleteItem, toggleTodo } from '../../redux/actions'
import { TodoItem } from './index'

const TodoList = ({ todos, deleteItem, toggleTodo }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.title}
              completed={todo.completed}
              deleteItem={deleteItem}
              toggleTodo={toggleTodo}
            />
          )
        })
      ) : (
        <div>No tasks</div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  const toggleView = state.toggleView // ---  OR const { toggleView } = state
  const todos = getTodosByToggleView(state, toggleView)
  return { todos }
}

const mapDispatchToProps = {
  deleteItem,
  toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
