import React, {Component} from 'react'
import { Field } from 'redux-form'
import { connect } from 'react-redux'

import InputText from 'components/form/element/InputText'
import SubmitButton from 'components/form/element/SubmitButton'

class OrderForm extends Component {
  render() {
    const { submitting, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <Field
          name='type'
          component={InputText}
          type='text'
        />
        <Field
          name='tableId'
          component={InputText}
          type='text'
        />
        <div className='col-md-12' style={{ textAlign: 'center' }}>
          <SubmitButton
            text='Xác nhận'
            submitting={submitting}
            className='btn btn-primary'
          />
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  orderForm: state.form.order
})

export default connect(mapStateToProps)(OrderForm)
