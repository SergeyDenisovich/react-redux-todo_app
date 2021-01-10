import { SET_FILTER } from '../types'
import { TOGGLE_VIEW } from '../../constants'

const initialState = TOGGLE_VIEW.ALL

const toggleView = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload
    }

    default:
      return state
  }
}

export default toggleView
