import {
  FETCH_FOOD_BEGIN,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_ERROR,
  UPDATE_FILTER
} from 'lib/actions/food'

import { USER_SIGNED_OUT } from 'ducks/user'

const initialState = {
  items: [],
  filterByCategory: 0,
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case UPDATE_FILTER:
      return {
        ...state,
        filterByCategory: action.filterByCategory
      }

    case FETCH_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.items
      }

    case FETCH_FOOD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        items: []
      }

    case USER_SIGNED_OUT:
      return {...initialState}
    default:
      return state
  }
}

export default reducer
