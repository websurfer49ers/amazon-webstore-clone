import React, { useState, useEffect } from "react";
import day, { month, twoDaysFromNow, hoursLeft, minLeft } from "./DateShenanigans.js";

function AddToCart(props) {
  const [seller, setSeller] = useState("");
  const price = props.price;

  useEffect(() => {
    fetch("http://localhost:3000/api/sellers/1", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((fetched) => {
        setSeller(fetched[0]);
      });
  }, []);

  return (
    <div className="addToCart">
      <div className="lazySpacer"></div>
      <div className="addToCartContainer">
        <div className="priceDiv">
          <span style={{ fontSize: "13px" }}>$</span>
          <span style={{ fontSize: "28px", verticalAlign: "text-top" }}>
            {price ? price.slice(1, price.length - 3) : null}
          </span>
          <span style={{ fontSize: "13px" }}>
            {price
              ? price.charAt(price.length - 2) + price.charAt(price.length - 1)
              : null}
          </span>
        </div>
        <img src="../../logo/primelogo.png"></img> <br></br>
        <div style={{ marginBottom: "5px" }}>
          <a style={{ textDecoration: "none" }}>FREE Returns</a>
        </div>
        <br></br>
        FREE delivery{" "}
        <span style={{ fontFamily: "AmazonEmberBold" }}>{day}, {month} {twoDaysFromNow}</span>. Order
        within <span style={{ color: "green" }}>{hoursLeft} hrs {minLeft} mins</span>
        <br></br>
        <div style={{ marginTop: "12px", display: "flex" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 2 16 12"
            style={{ marginRight: "3px" }}
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <a style={{ fontSize: "12px", textDecoration: "none" }}>
            Deliver to Websurfer49 - Fakecity 12345
          </a>
        </div>
        <br></br>
        {props.soldout ? (
          <span style={{ color: "red", fontSize: "18px" }}>Out of Stock.</span>
        ) : (
          <span style={{ color: "green", fontSize: "18px" }}>In Stock.</span>
        )}
        <br></br>
        <button className="quantityButton">Qty: 1</button> <br></br>
        <button className="addToCartButton">Add to Cart</button> <br></br>
        <button className="buyNowButton">Buy Now</button> <br></br>
        <a style={{ textDecoration: "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ color: "gray", marginRight: "5px" }}
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 0 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
          Secure transaction
        </a>
        <div className="shipsByDiv">
          <div className="shipsByContent" style={{ color: "rgb(90, 90, 90)" }}>
            Ships from
          </div>
          <div className="shipsByContent">Amazoom</div>
        </div>
        <div className="soldByDiv">
          <div className="shipsByContent" style={{ color: "rgb(90, 90, 90)" }}>
            Sold by
          </div>
          <div className="shipsByContent">
            <a>{seller.companyname}</a>
          </div>
        </div>
        Return policy:{" "}
        <a style={{ textDecoration: "none" }}>
          Eligible for Return, Refund, or Replacement within 30 days of receipt
        </a>
        <br></br>
        <input type="checkbox"></input> Add a gift receipt for easy returns
        <br></br>
        <hr className="MainItemDividerColor"></hr>
        <button className="addToListButton">Add to List</button> <br></br>
        <button className="addToRegistry">Add to Registry & Gifting</button>
        <br></br>
      </div>
    </div>
  );
}

export default AddToCart;
