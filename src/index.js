import React from "react";
import ReactDOM from "react-dom";

const App = ({ greeting }) => {
  return <div>Hello {greeting}</div>;
};

var mountNode = document.getElementById("app");

// hot module replacement for dev mode only, required as of version 1.12.0
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App greeting="world!" />, mountNode);
