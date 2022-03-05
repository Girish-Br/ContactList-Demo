import React, { Component } from "react";
import ReactDOM from 'react-dom';
import RouterComp from '../route/RouterComp';
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "../redux/store";
class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <div className="hero">
            <RouterComp />
          </div>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default App;