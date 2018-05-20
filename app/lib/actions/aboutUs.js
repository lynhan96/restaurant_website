import request from 'request-promise'
import { showNotification } from './showNotification'
import { makeGetRequestOptions } from '../requestHeader'

export const FETCH_ABOUT_US_BEGIN = 'FETCH_ABOUT_US_BEGIN'
export const FETCH_ABOUT_US_SUCCESS = 'FETCH_ABOUT_US_SUCCESS'
export const FETCH_ABOUT_US_ERROR = 'FETCH_ABOUT_US_ERROR'

export const fetchAboutUsBegin = () => ({
  type: FETCH_ABOUT_US_BEGIN
})

export const fetchAboutUsSuccess = items => ({
  type: FETCH_ABOUT_US_SUCCESS,
  items: items
})

export const fetchAboutUsError = error => ({
  type: FETCH_ABOUT_US_ERROR,
  error: error
})

export const fetchAboutUs = params => {
  return dispatch => {
    dispatch(fetchAboutUsBegin())
    request(makeGetRequestOptions('?vendorId=1', 'aboutUs')).then(body => {
      if (body.code === 401 || body.code === 400 || body.code === 414) {
        showNotification('topRight', 'error', 'Quá trình xác thực xảy ra lỗi!')
      } else {
        dispatch(fetchAboutUsSuccess(body.data.items))
      }
    })
    .catch(err => dispatch(fetchAboutUsError(err)))
  }
}
