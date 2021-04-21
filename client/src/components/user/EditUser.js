import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      phone: null,
      name: "",
      repUserId: null,
      repUserList: [],
    };
  }

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

  onSubmit = async (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { name, phone, repUserId } = this.state;
    const user = await axios.put(`http://localhost:5000/user/${id}`, {
      name,
      phone,
      rep_manager: parseInt(repUserId),
    });
    console.log(user);
    this.props.history.push("/");
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const user = await axios.get(`http://localhost:5000/user/${id}`);
    const userList = await axios.get("http://localhost:5000/user");
    this.setState({ repUserList: userList.data });
    console.log(user.data);
    this.setState({
      name: user.data.name,
      phone: user.data.phone,
      repUserId: user.data.rep_manager,
    });
  }

  render() {
    const { user, name, phone, repUserId, repUserList } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={this.onChangeName}
            name="name"
            placeholder="Enter user"
            required
          ></Input>
          <Input
            type="number"
            value={phone}
            onChange={this.onChangePhone}
            name="phone"
            placeholder="Enter phone"
            required
          ></Input>
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
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    );
  }
}

export default withRouter(EditUser);
