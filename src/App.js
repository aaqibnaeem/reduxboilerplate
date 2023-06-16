import React from "react";
import { connect } from "react-redux";
import { increament, decreament } from "./config/store/action";
import AddProduct from "./components/AddProduct";
import AllProducts from "./components/AllProducts";

let App = (props) => {
  return (
    <>
      {/* <h3>{props.count}</h3>
    <div><button onClick={()=>props.increament()}>Inc</button></div>
    <div><button onClick={()=>props.decreament()}>Dec</button></div> */}
      <AddProduct />
      <AllProducts />
    </>
  )
}
const mapStateToProps = (state) => ({
  count: state.count,
  email: state.user
})

const mapDispatchToProps = (dispatch) => ({
  increament: () => dispatch(increament()),
  decreament: () => dispatch(decreament())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)