import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      repUserId: null,
      repUserList: [],
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, repUserId } = this.state;
    const user = await axios.post("http://localhost:5000/user", {
      name,
      phone: parseInt(phone),
      rep_manager: repUserId,
    });

    console.log(user);

    this.props.history.push("/");
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  onChangeRelUser = (e) => {
    this.setState({ repUserId: e.target.value });
    console.log(e.target.value);
  };

  async componentDidMount() {
    const user = await axios.get("http://localhost:5000/user");
    this.setState({ repUserList: user.data });
  }

  render() {
    const { name, phone, repUserList, repUserId } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={this.onChangeName}
            name="name"
            placeholder="Enter user name"
            required
          ></Input>
          <Label>Phone Number</Label>
          <Input
            type="number"
            value={phone}
            onChange={this.onChangePhone}
            name="phone"
            placeholder="Enter phone"
            required
          ></Input>
          <Label>Mangaer</Label>
          <Input
            type="select"
            value={repUserId}
            onChange={this.onChangeRelUser}
            name="replUser"
            placeholder="Enter Manager"
            required
          >
            {repUserList.map((repUser) => (
              <option value={repUser.id}>{repUser.name}</option>
            ))}
          </Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    );
  }
}

export default withRouter(AddUser);
