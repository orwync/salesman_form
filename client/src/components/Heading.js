import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Salesman form</NavbarBrand>
        <Nav className="d-flex justify-content-around">
          <NavItem className="m-2">
            <Link className="btn btn-primary" to="/user/add">
              Add User
            </Link>
          </NavItem>
          <NavItem className="m-2">
            <Link className="btn btn-primary" to="/product/add">
              Add Product
            </Link>
          </NavItem>
          <NavItem className="m-2">
            <Link className="btn btn-primary" to="/outlet/add">
              Add Outlet
            </Link>
          </NavItem>
          <NavItem className="m-2">
            <Link className="btn btn-primary" to="/order/add">
              Add Order
            </Link>
          </NavItem>
          <NavItem className="m-2">
            <Link className="btn btn-primary" to="/order/query">
              Query Orders
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
