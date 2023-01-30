import React from "react";

function AddToCart() {
  return (
    <div className="addToCart">
      <div className="lazySpacer"></div>
      <div className="addToCartContainer">
        7.89 <br></br>
        "PrimeLogo" <br></br>
        <div style={{ "margin-bottom": "5px" }}>
          <a>FREE Returns</a>{" "}
        </div>
        <br></br>
        FREE delivery{" "}
        <span style={{ "font-family": "AmazonEmberBold" }}>
          Wednesday, February 1
        </span>
        . Order within <span style={{ color: "green" }}>3 hrs 17 mins </span>
        <br></br>
        <div style={{ "margin-top": "12px", display: "flex" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-geo-alt"
            viewBox="0 2 16 12"
            style={{ "margin-right": "3px" }}
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <a style={{ "font-size": "12px" }}>
            {" "}
            Deliver to Websurfer49 - Fakecity 12345{" "}
          </a>
        </div>
        <br></br>
        <span style={{ color: "green", "font-size": "18px" }}>
          In Stock.
        </span>{" "}
        <br></br>
        <button className="quantityButton">Qty: 1</button> <br></br>
        <button className="addToCartButton">Add to Cart</button> <br></br>
        <button className="buyNowButton">Buy Now</button> <br></br>
        Secure transaction <br></br>
        <div className="shipsByDiv">
          <div className="shipsByContent" style={{color: "rgb(90, 90, 90)"}}>Ships from</div>
          <div className="shipsByContent">Amazoom</div>
        </div>
        <div className="soldByDiv">
          <div className="shipsByContent" style={{color: "rgb(90, 90, 90)"}}>Sold by</div> <div className="shipsByContent"><a>Neron Brands</a></div>
        </div>
        Return policy:{" "}
        <a>
          Eligible for Return, Refund, or Replacement within 30 days of receipt
        </a>{" "}
        <br></br>
        <input type="checkbox"></input> Add a gift receipt for easy returns{" "}
        <br></br>
        <hr className="MainItemDividerColor"></hr>
        <button className="addToListButton">Add to List</button> <br></br>
        <button className="addToRegistry">
          Add to Registry & Gifting
        </button>{" "}
        <br></br>
      </div>
    </div>
  );
}

export default AddToCart;
