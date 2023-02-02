import React, { useEffect, useState } from "react";
import PhotoGallery from "./PhotoGallery.jsx";
import ItemInfo from "./ItemInfo.jsx";
import AddToCart from "./AddToCart.jsx";

function MainItem() {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch("/api/product/1", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((fetched) => {
        setItem(fetched[0]);
      });
  }, []);
  const price = item.price;
  const soldout = item.soldout;

  return (
    <>
      <div className="mainItemDiv">
        <PhotoGallery />
        <ItemInfo item={item}/>
        <AddToCart price={price} soldout={soldout}/>
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
