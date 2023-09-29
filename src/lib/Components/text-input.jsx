import React from 'react'
import { useState } from 'react'
import Title from './title'
import { placeholderFunc } from './tools/format'
import '../style.css'

const defaultLabel = 'Email Adress'
const defaultType = 'email'
const defaultPlaceHolder = placeholderFunc('name@example.com')

// Training component
export default function TextInput({
  type = defaultType,
  label = defaultLabel,
  value,
  onChange,
  placeholder = defaultPlaceHolder,
}) {
  const [inputString, setInputString] = useState()

  return (
    <div style={{ width: 640, margin: '15px auto' }}>
      <Title />
      <div className="simple-form-group">
        {label && <label className="simple-text-label">{label}</label>}
        <input
          placeholder={placeholder}
          type={type}
          className="simple-text-input"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
      </div>
    </div>
  )
}
