import React from 'react'
import Title from './title'

const defaultLabel = 'Email Adress'
const defaultPlaceholder = 'name@example.com'
const defaultType = 'email'

export default function TextInput({
  type = defaultType,
  label = defaultLabel,
  value,
  onChange,
  placeholder = defaultPlaceholder,
}) {
  return (
    <div style={{ width: 640, margin: '15px auto' }}>
      <Title />
      <div className="simple-form-group">
        {label && <label className="simple-text-label">{label}</label>}
        <input
          placeholder={placeholder}
          type={type}
          className="simple-text-input"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      </div>
    </div>
  )
}
