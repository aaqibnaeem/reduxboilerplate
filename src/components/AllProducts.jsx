import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { edit, updateProduct, deleteProduct } from "../config/store/action";

let AllProducts = (props) => {
  let [updObj, setUpdObj] = useState({});
  const handleChange = (e) => {
    setUpdObj({ ...updObj, [e.target.name]: e.target.value });
  };
  const handleEdit = (index, brand, product, price) => {
    props.edit(index);
    setUpdObj({
      brand: brand,
      product: product,
      price: price,
      e: 1,
    });
  };

  const handleUpdate = (index, brand, product, price) => {
    let obj = {
      brand: brand,
      product: product,
      price: price,
      ind: index,
      e: 0,
    };
    props.updateProduct(obj);
  };
  return (
    <>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        All Products
      </h2>
      <table style={{ width: "100%", textAlign: "center", padding: "0 20px" }}>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Product</th>
            <th>Price</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.products !== undefined
            ? props.products.map((v, i) => {
                if (v.e === 0) {
                  return (
                    <tr key={i}>
                      <td>{v.brand}</td>
                      <td>{v.product}</td>
                      <td>{v.price}</td>
                      <td>
                        <button
                          style={{
                            margin: "4px",
                            width: "80px",
                            height: "20px",
                            color: "blue",
                            border: "none",
                            backgroundColor: "lightgray",
                            borderRadius: "8px",
                          }}
                          onClick={() =>
                            handleEdit(i, v.brand, v.product, v.price)
                          }
                        >
                          Edit
                        </button>
                        <button
                          style={{
                            margin: "4px",
                            width: "80px",
                            height: "20px",
                            color: "red",
                            border: "none",
                            backgroundColor: "lightgray",
                            borderRadius: "8px",
                          }}
                          onClick={() => props.deleteProduct(i)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={i}>
                      <td>
                        <input
                          style={{
                            border: "1px solid grey",
                            borderRadius: "8px",
                            padding: "3px 8px",
                            height: "20px",
                          }}
                          type="text"
                          name="brand"
                          id="brand"
                          value={updObj.brand}
                          onChange={(e) => handleChange(e)}
                        />
                      </td>
                      <td>
                        <input
                          style={{
                            border: "1px solid grey",
                            borderRadius: "8px",
                            padding: "3px 8px",
                            height: "20px",
                          }}
                          type="text"
                          name="product"
                          id="product"
                          value={updObj.product}
                          onChange={(e) => handleChange(e)}
                        />
                      </td>
                      <td>
                        <input
                          style={{
                            border: "1px solid grey",
                            borderRadius: "8px",
                            padding: "3px 8px",
                            height: "20px",
                          }}
                          type="number"
                          name="price"
                          id="price"
                          value={updObj.price}
                          onChange={(e) => handleChange(e)}
                        />
                      </td>
                      <td>
                        <button
                        style={{
                          margin: "4px",
                          width: "80px",
                          height: "20px",
                          color: "green",
                          border: "none",
                          backgroundColor: "lightgray",
                          borderRadius: "8px",
                        }}
                          onClick={() =>
                            handleUpdate(
                              i,
                              updObj.brand,
                              updObj.product,
                              updObj.price
                            )
                          }
                        >
                          Save
                        </button>
                      </td>
                    </tr>
                  );
                }
              })
            : null}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  edit: (data) => dispatch(edit(data)),
  updateProduct: (data) => dispatch(updateProduct(data)),
  deleteProduct: (data) => dispatch(deleteProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
