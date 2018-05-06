import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import RegisterForm from 'components/form/RegisterForm'
import { submitRegister } from 'lib/actions/submit'
import { connect } from 'react-redux'
import { changeOrderModal } from 'ducks/modal'

class RegisterModal extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.props.dispatch(changeOrderModal({ orderModal: false, loginModal: false, registerModal: false, forgotPasswordModal: false }))
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.modal.registerModal}
          onHide={this.handleClose}
        >
          <Modal.Body>
            <h2 style={{textAlign: 'center', margin: '0'}}>Đăng kí tài khoản mới</h2>
            <DecoratedRegisterForm />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const DecoratedRegisterForm = reduxForm({
  form: 'order',
  onSubmit: submitRegister
})(RegisterForm)

const mapStateToProps = state => ({
  modal: state.modal
})

export default connect(mapStateToProps)(RegisterModal)
