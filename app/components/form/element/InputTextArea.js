import React from 'react'

// We receive props from ReduxForm's Field
// and turn them into props for Bootstrap forms
const InputTextArea = (props) => {
  const { required, name, defaultValue, input, label, type = 'text', placeHolder } = props

  const { onChange } = input

  return (
    <div className='form-group label-floating' style={{ marginTop: '0' }}>
      {label && <label className='control-label'>{label}</label>}
      <textarea type={type} className='form-control' name={name} required={required} defaultValue={defaultValue} onChange={onChange} placeholder={placeHolder} rows='5'/>
    </div>
  )
}

export default InputTextArea
