import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import {createBrowserHistory} from "history"
import {BrowserRouter,HashRouter,unstable_HistoryRouter as HistoryRouter} from 'react-router-dom'
Modal.setAppElement("#root");

const hist = createBrowserHistory({ window });


ReactDOM.render(
  <HashRouter><App /></HashRouter>,
  document.getElementById("root")
);
