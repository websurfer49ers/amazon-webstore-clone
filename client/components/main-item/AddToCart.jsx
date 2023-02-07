import React, { useState, useEffect } from "react";
import day, {
  month,
  twoDaysFromNow,
  hoursLeft,
  minLeft,
} from "./DateShenanigans.js";

function AddToCart(props) {
  const [seller, setSeller] = useState("");
  const [freeReturnBox, setFreeReturnBox] = useState(false);
  const [returnPolicyBox, setReturnPolicyBox] = useState(false);
  const price = props.price;

  useEffect(() => {
    fetch(`http://localhost:3000/api/sellers/${props.productId}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((fetched) => {
        setSeller(fetched[0]);
      });
  }, [props.productId]);

  function openFreeReturnBox() {
    setFreeReturnBox(true);
  }

  function closeFreeReturnBox() {
    setFreeReturnBox(false);
  }

  function openReturnPolicyBox() {
    setReturnPolicyBox(true);
  }

  function closeReturnPolicyBox() {
    setReturnPolicyBox(false);
  }

  function addToCartHandler() {}
  const quantity = [];
  for (let i = 1; i <= 100; i++) {
    quantity.push(i);
  }
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
          <div className="messageBoxWrapper">
            <a onClick={openFreeReturnBox}>FREE Returns</a>
            {freeReturnBox ? (
              <>
                <div className="messageBoxOverlay" onClick={closeFreeReturnBox}>
                  {" "}
                </div>
                <div className="messageBox">
                  <button
                    className="closeMessageBox"
                    onClick={closeFreeReturnBox}
                  >
                    <b>X</b>
                  </button>
                  <b>Return this item for free</b> <br></br>
                  <br></br>
                  Free returns are available for the shipping address you chose.
                  You can return the item for any reason in new and unused
                  condition: no shipping charges.
                  <br></br>
                  <a>Learn more about free returns.</a> <br></br>
                  <a>How to return the item?</a>
                  <div className="boxTriangle"></div>
                  <div className="boxTriangleOuter"></div>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {!props.soldout ? (
          <>
            <br></br>
            FREE delivery{" "}
            <span style={{ fontFamily: "AmazonEmberBold" }}>
              {day}, {month} {twoDaysFromNow}
            </span>
            . Order within{" "}
            <span style={{ color: "green" }}>
              {hoursLeft} hrs {minLeft} mins
            </span>
            <br></br>
          </>
        ) : null}
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
          <>
            <span style={{ color: "rgb(185, 48, 48)", fontSize: "18px" }}>
              Temporarily out of stock.
            </span>
            <br></br>
            Order now and we'll deliver when available.
          </>
        ) : (
          <span style={{ color: "green", fontSize: "18px" }}>In Stock.</span>
        )}
        <br></br>
        <div className="qtyNext">Qty:</div>
        <select className="quantityButton">
          {quantity.map((i) => (
            <option value={i} key={`quantity${i}`}>
              {i}
            </option>
          ))}
        </select>
        <br></br>
        <button className="addToCartButton" onClick={addToCartHandler}>
          Add to Cart
        </button>{" "}
        <br></br>
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
            {seller.companyname ? <a>{seller.companyname}</a> : null}
          </div>
        </div>
        Return policy:{" "}
        <div className="messageBoxWrapper">
          <a onClick={openReturnPolicyBox}>
            Eligible for Return, Refund or Replacement within 30 days of receipt
          </a>
          {returnPolicyBox ? (
            <>
              <div className="messageBoxOverlay" onClick={closeReturnPolicyBox}>
                {" "}
              </div>
              <div className="policyBox">
                <button
                  className="closeMessageBox"
                  onClick={closeReturnPolicyBox}
                >
                  <b>X</b>
                </button>
                This item can be returned in its original condition for a full
                refund or replacement within 30 days of receipt.
                <br></br>
                <a>Read full return policy</a>
                <div className="boxTriangle"></div>
                <div className="boxTriangleOuter"></div>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <br></br>
      <input type="checkbox"></input> Add a gift receipt for easy returns
      <br></br>
      <hr className="MainItemDividerColor"></hr>
      <button className="addToListButton">Add to List</button> <br></br>
      <button className="addToRegistry">Add to Registry & Gifting</button>
      <br></br>
    </div>
  );
}

export default AddToCart;
