import React from "react";
import {data} from './data'

const TextInput = ({ type = "text", label, value, onChange }) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={data}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
);

export default TextInput;