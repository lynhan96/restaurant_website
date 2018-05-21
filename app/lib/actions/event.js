import request from 'request-promise'
import { showNotification } from './showNotification'
import { makeGetRequestOptions } from '../requestHeader'

export const FETCH_EVENT_BEGIN = 'FETCH_EVENT_BEGIN'
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS'
export const FETCH_EVENT_ERROR = 'FETCH_EVENT_ERROR'

export const fetchEventBegin = () => ({
  type: FETCH_EVENT_BEGIN
})

export const fetchEventSuccess = items => ({
  type: FETCH_EVENT_SUCCESS,
  items: items
})

export const fetchEventError = error => ({
  type: FETCH_EVENT_ERROR,
  error: error
})

export const fetchEvent = params => {
  return dispatch => {
    dispatch(fetchEventBegin())
    request(makeGetRequestOptions('?vendorId=1', 'events')).then(body => {
      if (body.code === 401 || body.code === 400 || body.code === 414) {
        showNotification('topRight', 'error', 'Quá trình xác thực xảy ra lỗi!')
      } else {
        dispatch(fetchEventSuccess(body.data.items))
      }
    })
    .catch(err => dispatch(fetchEventError(err)))
  }
}
