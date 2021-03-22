import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { Provider } from "react-redux";
import { createStore } from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import SignalRHelper from "./components/SignalRHelper";
import { HubConnection } from "@microsoft/signalr";

SignalRHelper.connect().then((connection: HubConnection) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={createStore(connection)}>
        <App />
      </Provider>{" "}
    </React.StrictMode>,
    document.getElementById("root")
  );
});
