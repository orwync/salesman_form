import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button, Label } from "reactstrap";
import axios from "axios";

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const products = await axios.get("http://localhost:5000/product");
    this.setState({ products: products.data });
  }

  deleteProduct = async (id) => {
    // e.preventDefault();
    const deleteStatus = await axios.delete(
      `http://localhost:5000/product/${id}`
    );
    console.log(deleteStatus.data);
    const products = await axios.get("http://localhost:5000/product");
    this.setState({ products: products.data });
  };

  render() {
    const products = this.state.products;
    return (
      <ListGroup className="mt-4">
        <h1>Products</h1>
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <>
                <ListGroupItem className="d-flex" key={product.id}>
                  <Label>Name:</Label>
                  <strong>{product.name}</strong>
                </ListGroupItem>
                <ListGroupItem className="d-flex" key={product.id}>
                  <Label>Cost:</Label>
                  <strong>{product.cost}</strong>
                </ListGroupItem>
                <ListGroupItem className="d-flex" key={product.id}>
                  <div className="ml-auto">
                    <Link
                      to={`/product/edit/${product.id}`}
                      color="warning"
                      className="btn btn-warning mr-1"
                    >
                      Edit
                    </Link>
                    <Button
                      value={product.id}
                      color="danger"
                      onClick={() => this.deleteProduct(product.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroupItem>
              </>
            ))}
          </>
        ) : (
          <h4 className="text-center">No Products</h4>
        )}
      </ListGroup>
    );
  }
}
