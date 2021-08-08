import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceworker from "./serviceWorker";
import StepContext from "./StepContext";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import DisplayData from "./components/DisplayData";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={StepContext} />
      <Route exact path="/displayData" component={DisplayData} />
    </Router>
  );
};
ReactDOM.render(
  <Routes />,  document.getElementById("root")
);

serviceworker.unregister();
