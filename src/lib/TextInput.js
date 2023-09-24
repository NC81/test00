import React from "react";

const defaultLabel = "Email Adress"
const defaultPlaceholder = "name@example.com"
const defaultType = "email"

const TextInput = ({ type = defaultType, label = defaultLabel, value, onChange, placeholder = defaultPlaceholder }) => (
  <div style={{ width: 640, margin: "15px auto" }}>
  <h1>Hello React!</h1>
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      placeholder={placeholder}
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
</div>
);

export default TextInput;