import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import LoginForm from 'components/form/LoginForm'
import { submitLogin } from 'lib/actions/submit'
import { connect } from 'react-redux'
import { changeModalState } from 'ducks/modal'

class LoginModal extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.props.dispatch(changeModalState({ orderModal: false, loginModal: false, registerModal: false, forgotPasswordModal: false }))
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.modal.loginModal}
          onHide={this.handleClose}
        >
          <Modal.Body>
            <h2 style={{textAlign: 'center', margin: '0'}}>Đăng nhập</h2>
            <DecoratedLoginForm />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const DecoratedLoginForm = reduxForm({
  form: 'order',
  onSubmit: submitLogin
})(LoginForm)

const mapStateToProps = state => ({
  modal: state.modal
})

export default connect(mapStateToProps)(LoginModal)
