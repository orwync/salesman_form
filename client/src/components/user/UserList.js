import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import axios from "axios";

export class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const users = await axios.get("http://localhost:5000/user");
    this.setState({ users: users.data });
  }

  deleteUser = async (id) => {
    // e.preventDefault();
    const deleteStatus = await axios.delete(`http://localhost:5000/user/${id}`);
    console.log(deleteStatus.data);
    const users = await axios.get("http://localhost:5000/user");
    this.setState({ users: users.data });
  };

  render() {
    const users = this.state.users;
    return (
      <ListGroup>
        <h1>Users</h1>
        {users.length > 0 ? (
          <>
            {users.map((user) => (
              <>
                <ListGroupItem key={user.id}>
                  <label>Name:</label>
                  <strong>{user.name}</strong>
                </ListGroupItem>
                <ListGroupItem key={user.id}>
                  <label>Phone:</label>
                  <strong>{user.phone}</strong>
                </ListGroupItem>
                <ListGroupItem key={user.id}>
                  <label>Manager:</label>
                  <strong>{user.rep_manager}</strong>
                </ListGroupItem>
                <ListGroupItem key={user.id}>
                  <div className="ml-auto">
                    <Link
                      to={`/user/edit/${user.id}`}
                      color="warning"
                      className="btn btn-warning mr-1"
                    >
                      Edit
                    </Link>
                    <Button
                      value={user.id}
                      color="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroupItem>
              </>
            ))}
          </>
        ) : (
          <h4 className="text-center">No Users</h4>
        )}
      </ListGroup>
    );
  }
}
