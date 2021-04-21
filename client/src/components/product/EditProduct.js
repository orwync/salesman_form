import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: null,
      name: "",
    };
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeCost = (e) => {
    this.setState({ cost: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { name, cost } = this.state;
    const product = await axios.put(`http://localhost:5000/product/${id}`, {
      name,
      cost,
    });
    console.log(product);
    this.props.history.push("/");
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const product = await axios.get(`http://localhost:5000/product/${id}`);
    console.log(product);
    this.setState({ name: product.data.name, cost: product.data.cost });
  }

  render() {
    const { name, cost } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={this.onChangeName}
            name="name"
            placeholder="Enter Product Name"
            required
          ></Input>
          <Label>Cost</Label>
          <Input
            type="decimal"
            value={cost}
            onChange={this.onChangeCost}
            name="cost"
            placeholder="Enter cost"
            required
          ></Input>
        </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    );
  }
}

export default withRouter(EditProduct);
