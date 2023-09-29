import React from 'react'
import { render } from 'react-dom'
import TextInput from './lib/Components/text-input'
import './lib/style.css'

function App() {
  return <TextInput />
}

render(<App />, document.getElementById('root'))
