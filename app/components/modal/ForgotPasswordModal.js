import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import ForgotPasswordForm from 'components/form/ForgotPasswordForm'
import { submitForgotPassword } from 'lib/actions/submit'
import { changeModalState } from 'ducks/modal'

class ForgotPasswordModal extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.props.dispatch(changeModalState({ foodModal: false, orderModal: false, loginModal: false, registerModal: false, forgotPasswordModal: false }))
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.modal.forgotPasswordModal}
          onHide={this.handleClose}
        >
          <Modal.Body>
            <h2 style={{textAlign: 'center', margin: '0'}}>Quên mật khẩu</h2>
            <DecoratedForgotPasswordForm />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const DecoratedForgotPasswordForm = reduxForm({
  form: 'order',
  onSubmit: submitForgotPassword
})(ForgotPasswordForm)

const mapStateToProps = state => ({
  modal: state.modal
})

export default connect(mapStateToProps)(ForgotPasswordModal)
