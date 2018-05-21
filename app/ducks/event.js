import {
  FETCH_EVENT_BEGIN,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_ERROR
} from '../lib/actions/event'

const initialState = {
  items: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.items
      }

    case FETCH_EVENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        items: []
      }

    default:
      return state
  }
}

export default reducer
