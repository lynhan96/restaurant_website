import React, {Component} from 'react'
import { Field } from 'redux-form'

import InputText from 'components/form/element/InputText'
import InputTextArea from 'components/form/element/InputTextArea'
import InputDateTime from 'components/form/element/InputDateTime'
import InputTime from 'components/form/element/InputTime'
import SubmitButton from 'components/form/element/SubmitButton'

// This form is pure so it is easy to test
// Page/Login will decorate it with the necessary props
class BookTableForm extends Component {
  render() {
    const { submitting, handleSubmit } = this.props

    return (
      <form id='bookingForm' onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <Field
          name='name'
          component={InputText}
          placeHolder='Tên'
          type='text'
          required={true}
        />
        <Field
          name='email'
          component={InputText}
          placeHolder='Email'
          type='email'
          required={true}
        />
        <Field
          name='phoneNumber'
          component={InputText}
          placeHolder='Số điện thoại'
          type='number'
          required={true}
        />
        <Field
          name='people'
          component={InputText}
          placeHolder='Số Người'
          type='number'
          required={true}
        />
        <Field
          name='date'
          component={InputDateTime}
          placeHolder='Ngày'
          type='text'
          required={true}
        />
        <Field
          name='time'
          component={InputTime}
          placeHolder='Giờ'
          type='text'
          required={true}
        />
        <Field
          name='note'
          component={InputTextArea}
          placeHolder='Ghi chú'
          type='text'
        />
        <SubmitButton
          text='Đặt bàn'
          submitting={submitting}
          className='btn btn-primary btn-block btn-flat'
        />
       </form>
    )
  }
}

export default BookTableForm
