import React, {Component} from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'

import InputText from 'components/form/element/InputText'
import SubmitButton from 'components/form/element/SubmitButton'
import { changeModalState } from 'ducks/modal'

// This form is pure so it is easy to test
// Page/Login will decorate it with the necessary props
class LoginForm extends Component {
  constructor(props, context) {
    super(props, context)

    this.showForgotPasswordModal = this.showForgotPasswordModal.bind(this)
  }

  showForgotPasswordModal() {
    this.props.dispatch(changeModalState({ orderModal: false, loginModal: false, registerModal: false, forgotPasswordModal: true }))
  }

  render() {
    const { submitting, handleSubmit } = this.props

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
          name='password'
          component={InputText}
          label='Mật khẩu'
          type='password'
          required={true}
        />
        <SubmitButton
          text='Đăng nhập'
          submitting={submitting}
          className='btn btn-primary btn-block btn-flat'
        />
        <div className='form-group label-floating' style={{textAlign: 'center'}}>
          <Link
            to='#'
            style={{ margin: '10px 0' }}
            onClick={e => { e.preventDefault(); this.showForgotPasswordModal() }}
          >Quên mật khẩu?</Link>
        </div>
       </form>
    )
  }
}

export default LoginForm
