import React from "react";
import { Route, useHistory } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import AddNew from "./components/AddNew";
import "./App.css";

const App = () => {
  let history = useHistory();

  const goBack = (delay) => {
    setTimeout(() => {
      history.push("/");
    }, delay);
  };

  return (
    <div className="app">
      <Navigation textLogo="FakeStore" />
      <Route path="/" exact>
        <ProductList />
      </Route>
      <Route path="/products/:id">
        <ProductPage goBack={goBack} />
      </Route>
      <Route path="/add-new">
        <AddNew goBack={goBack} />
      </Route>
    </div>
  );
};

export default App;
