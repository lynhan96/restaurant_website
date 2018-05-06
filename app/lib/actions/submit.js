import { SubmissionError } from 'redux-form'
import request from 'request-promise'
import R from 'ramda'
import * as firebase from 'firebase'
import moment from 'moment'

import { updateSelectedFood } from 'ducks/selectedFood'
import { makePostRequestOptions } from '../requestHeader'
import { showNotification } from './showNotification'
import Navigator from 'lib/Navigator'
import { getSelectedState, getFoodState, getAdminData, getTableState, getOrderingState } from 'lib/Constant'
import { fetchOrderings } from 'lib/actions/ordering'
import { userHasSignedIn } from 'ducks/user'
import { changeModalState } from 'ducks/modal'

// Redux-form requires a promise for async submission
// so we return a promise
export const submitLogin =
  (values, dispatch, props) => {
    const { email, password } = values
    let user = null
    const url = 'login'
    const params = { email: email, password: password, vendorId: 1 }

    return request(makePostRequestOptions(params, url)).then(body => {
      if (body.code === 0) {
        dispatch(changeModalState({ orderModal: false, loginModal: false, registerModal: false, forgotPasswordModal: false }))
        user = body.data
        dispatch(userHasSignedIn(user))
      } else if (body.code === 416) {
        showNotification('topRight', 'error', 'Mật khẩu không hợp lệ!')
      } else if (body.code === 414) {
        showNotification('topRight', 'error', 'Tài khoản không tồn tại!')
      } else {
        showNotification('topRight', 'error', 'Lỗi hệ thống')
      }

      return null
    })
    .catch(function (err) {
      if (err.message) {
        showNotification('topRight', 'error', err.message)
        throw new SubmissionError({ _error: err.message })
      } else {
        showNotification('topRight', 'error', JSON.stringify(err))
        throw new SubmissionError({ _error: JSON.stringify(err) })
      }
    })
  }

export const submitRegister =
  (values, dispatch, props) => {
    const { email, password, confirmPassword, phoneNumber, name, gender, birthday } = values

    if (password !== confirmPassword) {
      return showNotification('topRight', 'error', 'Vui lòng kiểm tra lại mật khẩu!')
    }

    let user = null
    const url = 'register'
    const params = { email: email, password: password, birthday: birthday, phoneNumber: phoneNumber, name: name, gender: gender, vendorId: 1 }

    return request(makePostRequestOptions(params, url)).then(body => {
      if (body.code === 0) {
        dispatch(changeModalState({ orderModal: false, loginModal: false, registerModal: false, forgotPasswordModal: false }))
        user = body.data
        dispatch(userHasSignedIn(user))
        showNotification('topRight', 'success', 'Tạo tài khoản thành công!')
      } else if (body.code === 418) {
        showNotification('topRight', 'error', 'Email đã tồn tại. Vui lòng nhập email khác!')
      } else {
        showNotification('topRight', 'error', 'Lỗi hệ thống')
      }

      return null
    })
    .catch(function (err) {
      if (err.message) {
        showNotification('topRight', 'error', err.message)
        throw new SubmissionError({ _error: err.message })
      } else {
        showNotification('topRight', 'error', JSON.stringify(err))
        throw new SubmissionError({ _error: JSON.stringify(err) })
      }
    })
  }

export const submitForgotPassword =
  (values, dispatch, props) => {
    const { email } = values

    const url = 'forgotPassword'
    const params = { email: email }

    return request(makePostRequestOptions(params, url)).then(body => {
      if (body.code === 0) {
        showNotification('topCenter', 'success', 'Vui lòng kiểm tra email để nhận mật khẩu mới!')
        Navigator.push('login')
      } else if (body.code === 414) {
        showNotification('topCenter', 'error', 'Tài khoản không tồn tại trong hệ thống!')
      } else {
        showNotification('topCenter', 'error', 'Lỗi hệ thống')
      }

      return Promise.resolve()
    })
    .catch(function (err) {
      if (err.message) {
        showNotification('topCenter', 'error', err.message)
        throw new SubmissionError({ _error: err.message })
      } else {
        showNotification('topCenter', 'error', JSON.stringify(err))
        throw new SubmissionError({ _error: JSON.stringify(err) })
      }
    })
  }

const getOrderItems = (selectItems, items) => R.pipe(
  R.keys,
  R.map(item => mergeQuantity(selectItems[item], items)),
)(selectItems)

const mergeQuantity = (selectItem, items) => {
  const item = R.find(
    R.propEq('id', parseInt(selectItem.id))
  )(items)

  if (!item) return {}
  item['quantity'] = selectItem.quantity
  item['status'] = 'Đang chờ xác nhận từ nhà bếp'
  return item
}

export const submitOrder =
  (values, dispatch, props) => {
    const foods = getFoodState().items
    const selectedFoods = getSelectedState().items
    const employeeData = getAdminData()
    const tableData = getTableState().items
    const orderingData = getOrderingState().items
    let items = getOrderItems(selectedFoods, foods)
    let table = tableData[values.tableId]
    let orderId = ''
    let message = ''

    if (items.length === 0) {
      return showNotification('topCenter', 'info', 'Vui lòng chọn món ăn!')
    }

    if (values.type === 'newOrder') {
      if (tableData[values.tableId].status === 'Đã có khách' || tableData[values.tableId].status === 'Đã đặt') {
        return showNotification('topCenter', 'error', 'Bàn đã có khách vui lòng chọn bàn khác!')
      }

      orderId = firebase.database().ref(employeeData.vid + '/orders/').push().key
      message = 'Đặt món thành công!'
    } else {
      if (tableData[values.tableId].status !== 'Đã có khách' && tableData[values.tableId].status !== 'Đã đặt') {
        return showNotification('topCenter', 'error', 'Vui lòng chọn bàn đã có khách để thêm món ăn vào bàn đó!')
      }

      orderId = table.lastOrderingId
      const currentOrder = orderingData[orderId]
      if (currentOrder.items) {
        items = R.concat(currentOrder.items, items)
      }

      message = 'Thêm món ăn thành công!'
    }

    const totalPrice = R.pipe(
      R.values,
      R.map(item => item.currentPrice * item.quantity),
      R.sum
    )(items)

    const order = {
      createdAt: moment.utc().add(7, 'hours').format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment.utc().add(7, 'hours').format('YYYY-MM-DD hh:mm:ss'),
      transactionId: 'BILL.' + moment.utc().format('YYYY.MM.DD.hh.mm.ss'),
      status: 'Đang gọi món',
      totalPrice: totalPrice,
      items: items,
      userName: '',
      userId: '',
      tableId: values.tableId,
      employeeName: employeeData.name,
      employeeToken: employeeData.token,
      id: orderId
    }

    firebase.database().ref(employeeData.vid + '/orders/').child(orderId).set(order)

    table.status = 'Đã có khách'
    table['lastOrderingId'] = orderId

    const ref = firebase.database().ref(employeeData.vid + '/tables').child(values.tableId)
    ref.set(table)

    const notificationId = firebase.database().ref(getAdminData().vid + '/notifications/').push().key

    let notificationMessage = table.name + ': Có một order mới. Vui lòng kiểm tra'

    if (values.type !== 'newOrder') {
      notificationMessage = table.name + ': Vừa mới thêm ' + R.keys(selectedFoods).length + ' món ăn. Vui lòng kiểm tra'
    }

    firebase.database().ref(getAdminData().vid + '/notifications/').child(notificationId).set({
      id: notificationId,
      message: notificationMessage,
      type: 'kitchen',
      orderingId: orderId,
      tableId: values.tableId,
      requiredDeleteFood: 'no',
      read: 'no'
    })

    const cashierNotificationId = firebase.database().ref(getAdminData().vid + '/notifications/').push().key

    firebase.database().ref(getAdminData().vid + '/notifications/').child(cashierNotificationId).set({
      id: cashierNotificationId,
      message: table.name + ': Có một order mới.',
      type: 'cashier',
      orderingId: orderId,
      tableId: values.tableId,
      requiredDeleteFood: 'no',
      read: 'no'
    })

    dispatch(updateSelectedFood({}))
    dispatch(fetchOrderings())
    dispatch(changeModalState(false))

    showNotification('topCenter', 'success', message)

    Navigator.push('tabe-order-detail?tableId=' + values.tableId)
  }
