import React from 'react';
import { render } from "react-dom";
import { TextInput } from "./lib";

const App = () => (
  <TextInput />
);

render(<App />, document.getElementById("root"));