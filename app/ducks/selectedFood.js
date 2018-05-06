export const CHANGE_SELECTED = 'CHANGE_SELECTED'

export const updateSelectedFood = items => dispatch => {
  dispatch({type: CHANGE_SELECTED, items: items})
}

const initialState = {
  items: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED:
      return {
        ...state,
        items: action.items
      }

    default:
      return state
  }
}

export default reducer
