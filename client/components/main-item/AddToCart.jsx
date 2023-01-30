import React from "react";

function AddToCart() {
  return (
    <div className="addToCart">
      <div className="lazySpacer"></div>
      <div className="addToCartContainer">
        7.89 <br></br>
        "PrimeLogo" <br></br>
        Free Returns <br></br>
        FREE delivery Wednesday, February 1. Order within 3 hrs 17 mins <br></br>
        Deliver to Websurfer49 - Fakecity 12345 <br></br>
        In Stock. <br></br>
        <button className="quantityButton">Qty: 1</button> <br></br>
        <button className="addToCartButton">Add to Cart</button> <br></br>
        <button className="buyNowButton">Buy Now</button> <br></br>
        Secure transaction <br></br>
        Ships from Amazon <br></br>
        Sold by Neron Brands <br></br>
        Return policy: Eligible for Return, Refund, or Replacement within 30 days of receipt <br></br>
        <input type="checkbox"></input> Add a gift receipt for easy returns  <br></br>
        <hr className="MainItemDividerColor"></hr>
        <button className="addToListButton">Add to List</button> <br></br>
        <button className="addToRegistry">Add to Registry & Gifting</button> <br></br>
      </div>
    </div>
  );
}

export default AddToCart;
