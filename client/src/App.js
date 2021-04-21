import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/Home";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";
import AddOutlet from "./components/outlet/AddOutlet";
import EditOutlet from "./components/outlet/EditOutlet";
import AddOrder from "./components/order/AddOrder";
import EditOrder from "./components/order/EditOrder";
import Query from "./components/query/query";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/add" component={AddUser} />
          <Route path="/user/edit/:id" component={EditUser} />
          <Route path="/product/add" component={AddProduct} />
          <Route path="/product/edit/:id" component={EditProduct} />
          <Route path="/outlet/add" component={AddOutlet} />
          <Route path="/outlet/edit/:id" component={EditOutlet} />
          <Route path="/order/add" component={AddOrder} />
          <Route path="/order/edit/:id" component={EditOrder} />
          <Route path="/order/query" component={Query} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
