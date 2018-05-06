import React, {Component} from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'

import InputText from 'components/form/element/InputText'
import InputDateTime from 'components/form/element/InputDateTime'
import SelectField from 'components/form/element/SelectField'
import SubmitButton from 'components/form/element/SubmitButton'
import { changeOrderModal } from 'ducks/modal'

// This form is pure so it is easy to test
// Page/Login will decorate it with the necessary props
class RegisterForm extends Component {
  constructor(props, context) {
    super(props, context)

    this.showLoginModal = this.showLoginModal.bind(this)
  }

  showLoginModal() {
    this.props.dispatch(changeOrderModal({ orderModal: false, loginModal: true, registerModal: false, forgotPasswordModal: false }))
  }

  render() {
    const { submitting, handleSubmit } = this.props
    const selectFieldData = { gender: ['Nam', 'Nữ'] }

    return (
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <Field
          name='email'
          component={InputText}
          label='Email'
          type='email'
          required={true}
        />
        <Field
          name='name'
          component={InputText}
          label='Tên'
          type='text'
          required={true}
        />
        <Field
          name='birthday'
          component={InputDateTime}
          label='Ngày sinh'
          type='text'
          required={true}
        />
        <Field
          name='gender'
          component={SelectField}
          selectFieldData={selectFieldData}
          fieldName='gender'
          label='Giới tính'
          type='text'
          required={true}
        />
        <Field
          name='password'
          component={InputText}
          label='Mật khẩu'
          type='password'
          required={true}
        />
        <Field
          name='confirmPasword'
          component={InputText}
          label='Nhập lại mật khẩu'
          type='password'
          required={true}
        />
        <SubmitButton
          text='Đăng kí'
          submitting={submitting}
          className='btn btn-primary btn-block btn-flat'
        />
        <div className='form-group label-floating' style={{textAlign: 'center'}}>
          <Link
            to='#'
            style={{ margin: '10px 0' }}
            onClick={e => { e.preventDefault(); this.showLoginModal() }}
          >Trờ lại trang đăng nhập</Link>
        </div>
      </form>
    )
  }
}

export default RegisterForm
