import React, { useEffect, useState } from "react";
import PhotoGallery from "./PhotoGallery.jsx";
import ItemInfo from "./ItemInfo.jsx";
import AddToCart from "./AddToCart.jsx";
import imageState from "../../state.js";

function MainItem() {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/product/1", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((item) => {
        setItem(item[0]);
      });
  }, []);

  console.log(item);

  return (
    <>
      <div className="mainItemDiv">
        <PhotoGallery />
        <ItemInfo />
        <AddToCart />
      </div>
      <hr
        style={{
          "backgroundColor": "rgb(180, 180, 180)",
          height: "1px",
          border: 0,
        }}
      ></hr>
    </>
  );
}

export default MainItem;
