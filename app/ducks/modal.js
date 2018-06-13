import { USER_SIGNED_OUT } from 'ducks/user'

export const CHANGE_MODAL_STATUS = 'CHANGE_MODAL_STATUS'

export const changeModalState = modal => dispatch => {
  dispatch({
    type: CHANGE_MODAL_STATUS,
    orderModal: modal.orderModal,
    loginModal: modal.loginModal,
    registerModal: modal.registerModal,
    forgotPasswordModal: modal.forgotPasswordModal,
    foodModal: modal.foodModal
  })
}

const initialState = {
  orderModal: false,
  loginModal: false,
  resgisterModal: false,
  forgotPasswordModal: false,
  foodModal: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODAL_STATUS:
      return {
        ...state,
        orderModal: action.orderModal,
        loginModal: action.loginModal,
        registerModal: action.registerModal,
        forgotPasswordModal: action.forgotPasswordModal,
        foodModal: action.foodModal
      }

    case USER_SIGNED_OUT:
      return {...initialState}
    default:
      return state
  }
}

export default reducer
