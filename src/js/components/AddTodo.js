import React from 'react'
import { addTodo } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [text, setText] = React.useState('')
  const inputRef = React.useRef()

  React.useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleInput = e => {
    setText(e.target.value)
  }

  const handleClick = () => {
    if (text.trim()) {
      const task = text.trim().toUpperCase()
      dispatch(addTodo(task))
      setText('')
    } else {
      window.alert('Введите текст задачи')
    }
  }

  return (
    <div className="input-field">
      <label htmlFor="task-input">Enter your task:</label>
      <input
        ref={inputRef}
        type="text"
        id="task-input"
        onChange={handleInput}
        value={text}
        className="input-field__input"
      />
      <button onClick={handleClick} className="input-field__button">
        Add task
      </button>
    </div>
  )
}

export default AddTodo
