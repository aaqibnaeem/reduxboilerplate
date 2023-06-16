import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addProduct } from "../config/store/action";

let AddProduct = (props) => {
  let [product, setProduct] = useState({
    brand: "",
    product: "",
    price: "",
    e: 0,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      product.brand.length === 0 ||
      product.product.length === 0 ||
      product.price.length === 0
    ) {
      alert("all fields required");
    } else {
      props.addProduct(product);
      setProduct({
        brand: "",
        product: "",
        price: "",
        e: 0,
      });
      e.target.reset();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "40vh",
          }}
        >
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
            Add products
          </h2>
          <input
            type="text"
            name="brand"
            placeholder="Enter product's Brand name"
            onChange={(e) => handleChange(e)}
            style={{
              width: "33%",
              height: "30px",
              border: "1px solid grey",
              borderRadius: "10px",
              margin: "3px 0",
              padding: "0 10px",
            }}
          />
          <input
            type="text"
            name="product"
            placeholder="Enter complete product"
            onChange={(e) => handleChange(e)}
            style={{
              width: "33%",
              height: "30px",
              border: "1px solid grey",
              borderRadius: "10px",
              margin: "3px 0",
              padding: "0 10px",
            }}
          />
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            onChange={(e) => handleChange(e)}
            style={{
              width: "33%",
              height: "30px",
              border: "1px solid grey",
              borderRadius: "10px",
              margin: "3px 0",
              padding: "0 10px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "30px",
              width: "150px",
              border: "none",
              backgroundColor: "green",
              color: "white",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            +
          </button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (data) => dispatch(addProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
