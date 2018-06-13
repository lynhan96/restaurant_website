import { database } from 'database/database'
import R from 'ramda'

export const FETCH_ORDERING_BEGIN = 'FETCH_ORDERING_BEGIN'
export const FETCH_ORDERING_SUCCESS = 'FETCH_ORDERING_SUCCESS'
export const FETCH_ORDERING_ERROR = 'FETCH_ORDERING_ERROR'

export const fetchOrderingsBegin = () => ({
  type: FETCH_ORDERING_BEGIN
})

export const fetchOrderingsSuccess = items => ({
  type: FETCH_ORDERING_SUCCESS,
  items: items
})

export const fetchOrderingsError = error => ({
  type: FETCH_ORDERING_ERROR,
  error: error
})

export const fetchOrderings = params => {
  return dispatch => {
    dispatch(fetchOrderingsBegin())
    const ref = database.ref('1/orders')
    ref.once('value')
      .then((snapshot) => {
        dispatch(fetchOrderingsSuccess(getTopFood(snapshot.val())))
      })
      .then(() => {
        ref.on('value', (result) => {
          dispatch(fetchOrderingsSuccess(getTopFood(result.val())))
        })
      })
      .catch((error) => console.log(error))
  }
}

const getTopFood = orderings => {
  const foodItems = R.pipe(
    R.values,
    R.map(order => order.items),
    R.flatten
  )(orderings)
  let topFood = {}

  foodItems.map(item => {
    if (topFood[item.id]) {
      topFood[item.id].quantity = topFood[item.id].quantity + item.quantity
    } else {
      topFood[item.id] = item
    }
  })

  topFood = R.pipe(
    R.values,
    R.sortBy(R.prop('quantity')),
    R.reverse
  )(topFood)

  return topFood
}
