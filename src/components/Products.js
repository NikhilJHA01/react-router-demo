import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>Products</div>
      <nav className="product">
        <Link to="featured">Featured </Link>
        <Link to="new">New </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
