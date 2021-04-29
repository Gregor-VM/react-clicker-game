import React from "react";
import BuyClickItem from "./BuyClickItem";

function Buy() {
  return (
    <div className="row">
      <div className="col-md-3 pt-4">
        <h4>Buy Click Powers!</h4>
        <BuyClickItem click={10} price={1000}></BuyClickItem>
        <BuyClickItem click={100} price={10000}></BuyClickItem>
        <BuyClickItem click={1000} price={100000}></BuyClickItem>
        <BuyClickItem click={10000} price={1000000}></BuyClickItem>
      </div>
    </div>
  );
}

export default Buy;
