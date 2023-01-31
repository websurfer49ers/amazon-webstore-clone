import React from "react";
import PhotoGallery from "./PhotoGallery.jsx";
import ItemInfo from "./ItemInfo.jsx";
import AddToCart from "./AddToCart.jsx";
import imageState from "../../state.js";

function MainItem() {
  return (
    <>
      <div className="mainItemDiv">
        <PhotoGallery />
        <ItemInfo />
        <AddToCart />
      </div>
      <hr
        style={{
          "background-color": "rgb(180, 180, 180)",
          height: "1px",
          border: 0,
          width: "80%"
        }}
      ></hr>
    </>
  );
}

export default MainItem;
