import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button, Label } from "reactstrap";
import axios from "axios";

export class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  async componentDidMount() {
    const orders = await axios.get("http://localhost:5000/order");
    this.setState({ orders: orders.data });
  }

  deleteOrder = async (id) => {
    // e.preventDefault();
    const deleteStatus = await axios.delete(
      `http://localhost:5000/order/${id}`
    );
    console.log(deleteStatus.data);
    const orders = await axios.get("http://localhost:5000/order");
    this.setState({ orders: orders.data });
  };

  render() {
    const orders = this.state.orders;
    console.log("orders=====>", orders);
    return (
      <ListGroup className="mt-4">
        <h1>Orders</h1>
        {orders.length > 0 ? (
          <>
            {orders.map((order) => (
              <>
                <ListGroupItem className="d-flex" key={order.id}>
                  <Label>User Name:</Label>
                  <strong>{order.User.name}</strong>
                </ListGroupItem>
                <ListGroupItem className="d-flex" key={order.id}>
                  <Label>Product Name:</Label>
                  <strong>{order.Product.name}</strong>
                </ListGroupItem>
                <ListGroupItem className="d-flex" key={order.id}>
                  <Label>Outlet Name:</Label>
                  <strong>{order.Outlet.name}</strong>
                </ListGroupItem>
                <ListGroupItem className="d-flex" key={order.id}>
                  <Label>Quantity:</Label>
                  <strong>{order.quantity}</strong>
                </ListGroupItem>
                <ListGroupItem className="d-flex" key={order.id}>
                  <Label>Cost:</Label>
                  <strong>{order.cost}</strong>
                </ListGroupItem>
                <ListGroupItem className="d-flex" key={order.id}>
                  <div className="ml-auto">
                    <Link
                      to={`/order/edit/${order.id}`}
                      color="warning"
                      className="btn btn-warning mr-1"
                    >
                      Edit
                    </Link>
                    <Button
                      value={order.id}
                      color="danger"
                      onClick={() => this.deleteOrder(order.id)}
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
