import React, { Component } from "react";
import ReactDOM from 'react-dom';
import RouterComp from '../route/RouterComp';
import "../styles/index.scss";

export default class App extends Component {
  render() {
    return (
      <div className="hero">
        <RouterComp />
      </div>

    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('root'));