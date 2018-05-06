import {
  FETCH_FOOD_CATEGORIES_BEGIN,
  FETCH_FOOD_CATEGORIES_SUCCESS,
  FETCH_FOOD_CATEGORIES_ERROR
} from '../lib/actions/foodCategory'

const initialState = {
  items: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOD_CATEGORIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_FOOD_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.foodCategories
      }

    case FETCH_FOOD_CATEGORIES_ERROR:
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
