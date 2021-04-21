import React from "react";
import { Heading } from "./Heading";
import { UserList } from "./user/UserList";
import { ProductList } from "./product/ProductList";
import { OutletList } from "./outlet/OutletList";
import { OrderList } from "./order/OrderList";
import Query from "./query/query";

export const Home = () => {
  return (
    <>
      <Heading />
      <div className="d-flex justify-content-around">
        <UserList />
        <ProductList />
        <OutletList />
        <OrderList />
      </div>
    </>
  );
};
