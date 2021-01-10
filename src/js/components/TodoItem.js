import React from 'react'
import className from 'classnames'

const TodoItem = ({ id, text, completed, deleteItem, toggleTodo }) => {
  const handleClickItem = () => {
    toggleTodo(id)
  }

  const handleItemDeleteClick = e => {
    e.stopPropagation()
    if (window.confirm('Удалить задачу?')) {
      deleteItem(id)
    }
  }

  return (
    <li className="todo-item">
      <span
        className={className(text && completed && 'todo-item__text-completed')}
        onClick={handleClickItem}
      >
        {text}
      </span>
      {completed && (
        <button className="todo-item__button" onClick={handleItemDeleteClick}>
          Delete task
        </button>
      )}
    </li>
  )
}

export default TodoItem
