import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button, Label } from "reactstrap";
import axios from "axios";

export class OutletList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outlets: [],
    };
  }

  async componentDidMount() {
    const outlets = await axios.get("http://localhost:5000/outlet");
    this.setState({ outlets: outlets.data });
  }

  deleteOutlet = async (id) => {
    // e.preventDefault();
    const deleteStatus = await axios.delete(
      `http://localhost:5000/outlet/${id}`
    );
    console.log(deleteStatus.data);
    const outlets = await axios.get("http://localhost:5000/outlet");
    this.setState({ outlets: outlets.data });
  };

  render() {
    const outlets = this.state.outlets;
    return (
      <ListGroup className="mt-4">
        <h1>Outlets</h1>
        {outlets.length > 0 ? (
          <>
            {outlets.map((outlet) => (
              <>
                <ListGroupItem className="d-flex" key={outlet.id}>
                  <Label>Name:</Label>
                  <strong>{outlet.name}</strong>
                </ListGroupItem>
                <ListGroupItem className="d-flex" key={outlet.id}>
                  <Label>Phone:</Label>
                  <strong>{outlet.phone}</strong>
                </ListGroupItem>
                <ListGroupItem className="d-flex" key={outlet.id}>
                  <Label>Address:</Label>
                  <strong>{outlet.address}</strong>
                </ListGroupItem>
                <ListGroupItem className="d-flex" key={outlet.id}>
                  <div className="ml-auto">
                    <Link
                      to={`/outlet/edit/${outlet.id}`}
                      color="warning"
                      className="btn btn-warning mr-1"
                    >
                      Edit
                    </Link>
                    <Button
                      value={outlet.id}
                      color="danger"
                      onClick={() => this.deleteOutlet(outlet.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroupItem>
              </>
            ))}
          </>
        ) : (
          <h4 className="text-center">No Orders</h4>
        )}
      </ListGroup>
    );
  }
}
