import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class EditOutlet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "null",
      phone: null,
    };
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  onChangeAddress = (e) => {
    this.setState({ address: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { name, address, phone } = this.state;
    const outlet = await axios.put(`http://localhost:5000/outlet/${id}`, {
      name,
      phone,
      address,
    });
    console.log(outlet);
    this.props.history.push("/");
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const outlet = await axios.get(`http://localhost:5000/outlet/${id}`);
    console.log(outlet);
    this.setState({
      name: outlet.data.name,
      address: outlet.data.address,
      phone: outlet.data.phone,
    });
  }

  render() {
    const { name, address, phone } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={this.onChangeName}
            name="name"
            placeholder="Enter Outlet Name"
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
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    );
  }
}

export default withRouter(EditOutlet);
