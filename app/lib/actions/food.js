import request from 'request-promise'
import { showNotification } from './showNotification'
import { makeGetRequestOptions } from '../requestHeader'

export const FETCH_FOOD_BEGIN = 'FETCH_FOOD_BEGIN'
export const FETCH_FOOD_SUCCESS = 'FETCH_FOOD_SUCCESS'
export const FETCH_FOOD_ERROR = 'FETCH_FOOD_ERROR'
export const UPDATE_FILTER = 'UPDATE_FILTER'

export const fetchFoodsBegin = () => ({
  type: FETCH_FOOD_BEGIN
})

export const fetchFoodsSuccess = foods => ({
  type: FETCH_FOOD_SUCCESS,
  items: foods
})

export const fetchFoodsError = error => ({
  type: FETCH_FOOD_ERROR,
  error: error
})

export const filterByCategoryId = categoryId => ({
  type: UPDATE_FILTER,
  filterByCategory: categoryId
})

export const getFoods = params => dispatch => {
  request(makeGetRequestOptions('?vendorId=1&limit=100', 'foods')).then(body => {
    if (body.code === 401 || body.code === 400 || body.code === 414) {
      showNotification('topCenter', 'error', 'Quá trình xác thực xảy ra lỗi!')
    } else {
      dispatch(fetchFoodsSuccess(body.data.items))
    }
  })
    .catch(err => dispatch(fetchFoodsError(err)))
}
