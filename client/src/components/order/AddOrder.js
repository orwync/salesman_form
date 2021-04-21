import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      cost: 0,
      users: [],
      products: [],
      outlets: [],
      user_id: 1,
      product_id: 1,
      outlet_id: 1,
      productCost: 0,
      totalCost: 0,
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const { user_id, outlet_id, product_id, quantity } = this.state;
    const order = await axios.post("http://localhost:5000/order", {
      user_id,
      outlet_id,
      product_id,
      quantity: parseInt(quantity),
    });

    console.log(order);

    this.props.history.push("/");
  };

  onChangeQuantity = (e) => {
    const totalCost = parseInt(e.target.value) * this.state.productCost;
    console.log(totalCost);
    this.setState({ quantity: e.target.value, totalCost });
  };

  //   onChangePhone = (e) => {
  //     this.setState({ phone: e.target.value });
  //   };

  onChangeUser = (e) => {
    this.setState({ user_id: e.target.value });
    console.log(e.target.value);
  };

  onChangeProduct = (e) => {
    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const productCost = optionElement.getAttribute("cost");
    const totalCost = parseInt(productCost) * parseInt(this.state.quantity);
    this.setState({ product_id: e.target.value, productCost, totalCost });
    // console.log(e.target.value);
  };

  onChangeOutlet = (e) => {
    this.setState({ outlet_id: e.target.value });
    console.log(e.target.value);
  };

  async componentDidMount() {
    const users = await axios.get("http://localhost:5000/user");
    const outlets = await axios.get("http://localhost:5000/outlet");
    const products = await axios.get("http://localhost:5000/product");

    this.setState({
      users: users.data,
      outlets: outlets.data,
      products: products.data,
    });
  }

  render() {
    const {
      users,
      outlets,
      products,
      quantity,
      user_id,
      product_id,
      outlet_id,
      totalCost,
    } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>User</Label>
          <Input
            type="select"
            value={user_id}
            onChange={this.onChangeUser}
            name="user"
            placeholder="Enter User"
            required
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Input>
          <Label>Product</Label>
          <Input
            type="select"
            value={product_id}
            onChange={this.onChangeProduct}
            name="product"
            placeholder="Enter Product"
            required
          >
            {products.map((product) => (
              <option key={product.id} cost={product.cost} value={product.id}>
                {product.name}
              </option>
            ))}
          </Input>
          <Label>Outlet</Label>
          <Input
            type="select"
            value={outlet_id}
            onChange={this.onChangeOutlet}
            name="outlet"
            placeholder="Enter outlet"
            required
          >
            {outlets.map((outlet) => (
              <option key={outlet.id} value={outlet.id}>
                {outlet.name}
              </option>
            ))}
          </Input>
          <Label>Quantity</Label>
          <Input
            type="number"
            value={quantity}
            onChange={this.onChangeQuantity}
            name="quantity"
            placeholder="Enter quantity"
            required
          ></Input>
          <Label>Cost</Label>
          <p>{totalCost}</p>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    );
  }
}

export default withRouter(AddOrder);
