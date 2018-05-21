import React from 'react'
import TimePicker from 'material-ui/TimePicker'
// We receive props from ReduxForm's Field
// and turn them into props for Bootstrap forms
class InputTime extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (nilValue, date) {
    this.props.input.onChange(date)
  }

  componentWillMount () {
    const defaultValue = new Date()
    this.props.input.onChange(new Date(defaultValue))
  }

  render() {
    const { defaultValue, label } = this.props

    let defaultTime = defaultValue

    if (!defaultValue) {
      defaultTime = new Date()
    }

    return (
      <div className='form-group label-floating' style={{ marginTop: '0' }}>
        {label && <label>{label}</label>}
        <TimePicker
          className='form-control'
          name='timePicker'
          hintText="10 minutes step"
          minutesStep={10}
          defaultTime={new Date(defaultTime)}
          onChange={this.handleChange}
          cancelLabel='Hủy'
          okLabel='Chọn'
          format='24hr'
          textFieldStyle={style.dateTimeInput}
        />
      </div>
    )
  }
}

export default InputTime

const style = {
  dateTimeInput: {
    width: '100%',
    height: '43px',
    lineHeight: '19px',
    fontSize: '14px',
    paddingBottom: '14px !importtant'
  }
}
