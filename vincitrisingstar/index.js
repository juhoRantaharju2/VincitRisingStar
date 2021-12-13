import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import DataContext from "./contexts/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <DataContext>
      <Router>
        <App />
      </Router>
    </DataContext>
  </React.StrictMode>,
  document.getElementById("root")
);
