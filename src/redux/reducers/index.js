import { combineReducers } from 'redux'
import todos from './todos'
import toggleView from './toggleView'

export default combineReducers({ todos, toggleView })
