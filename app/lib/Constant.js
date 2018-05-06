import Store from 'lib/Store'

export const getUserData = _ => Store.getState().user.data
export const getFoodState = _ => Store.getState().food
export const getSelectedState = _ => Store.getState().selectedFood
export const getOrderingState = _ => Store.getState().ordering
export const getNotificationState = _ => Store.getState().notification

export const apiDomainUrl = _ => process.env.NODE_ENV === 'production' ? 'http://120.72.98.149:8000/v1/' : 'http://localhost:8000/v1/'
