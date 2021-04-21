import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

class AddOutlet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: null,
      address: "",
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, address } = this.state;
    const outlet = await axios.post("http://localhost:5000/outlet", {
      name,
      phone,
      address,
    });

    this.props.history.push("/");
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  onChangeAddress = (e) => {
    this.setState({ address: e.target.value });
  };

  render() {
    const { name, phone, address } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={this.onChangeName}
            name="name"
            placeholder="Enter outlet name"
            required
          ></Input>
          <Label>Phone</Label>
          <Input
            type="number"
            value={phone}
            onChange={this.onChangePhone}
            name="phone"
            placeholder="Enter phone"
            required
          ></Input>
          <Label>Address</Label>
          <Input
            type="text"
            value={address}
            onChange={this.onChangeAddress}
            name="address"
            placeholder="Enter address"
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

export default withRouter(AddOutlet);
