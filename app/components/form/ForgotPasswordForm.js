import React, {Component} from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'

import InputText from 'components/form/element/InputText'
import SubmitButton from 'components/form/element/SubmitButton'
import { changeModalState } from 'ducks/modal'

// This form is pure so it is easy to test
// Page/Login will decorate it with the necessary props
class ForgotPasswordForm extends Component {
  constructor(props, context) {
    super(props, context)

    this.showLoginModal = this.showLoginModal.bind(this)
  }

  showLoginModal() {
    this.props.dispatch(changeModalState({ orderModal: false, loginModal: true, registerModal: false, forgotPasswordModal: false }))
  }

  render() {
    const { submitting, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <label style={{ textAlign: 'center' }}>Vui lòng nhập email của bạn. Hệ thống sẽ gửi một mật khẩu mới tới email này</label>
        <Field
          name='email'
          component={InputText}
          label='Email'
          type='email'
          required={true}
        />
        <SubmitButton
          text='Xác nhận'
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

export default ForgotPasswordForm
