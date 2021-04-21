import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cost: null,
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const { name, cost } = this.state;
    const product = await axios.post("http://localhost:5000/product", {
      name,
      cost: parseFloat(cost),
    });

    this.props.history.push("/");
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeCost = (e) => {
    this.setState({ cost: e.target.value });
  };

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
            placeholder="Enter product name"
            required
          ></Input>
          <Label>Cost</Label>
          <Input
            type="decimal"
            value={cost}
            onChange={this.onChangeCost}
            name="cost"
            placeholder="Enter Cost"
            required
          ></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    );
  }
}

export default withRouter(AddProduct);
