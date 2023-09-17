import "./App.css";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
