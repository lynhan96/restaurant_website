import React from 'react'
import moment from 'moment'

// We receive props from ReduxForm's Field
// and turn them into props for Bootstrap forms
class CustomInputDateTime extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { required, input, label, type = 'text', placeHolder } = this.props
    const { onChange } = input

    return (
      <div className='form-group '>
        <label htmlFor='date' className='sr-only'>Thời gian</label>
        <input id='date' name='date' type={type} className='form-control date-time' required={required} onChange={onChange} placeholder={placeHolder}/>
      </div>
    )
  }
}

export default CustomInputDateTime
