import React from 'react';
import Title from './title';
const defaultLabel = 'Email Adress';
const defaultPlaceholder = 'name@example.com';
const defaultType = 'email';
export default function TextInput({
  type = defaultType,
  label = defaultLabel,
  value,
  onChange,
  placeholder = defaultPlaceholder
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 640,
      margin: '15px auto'
    }
  }, /*#__PURE__*/React.createElement(Title, null), /*#__PURE__*/React.createElement("div", {
    className: "simple-form-group"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "simple-text-label"
  }, label), /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    type: type,
    className: "simple-text-input",
    value: value,
    onChange: e => onChange && onChange(e.target.value)
  })));
}