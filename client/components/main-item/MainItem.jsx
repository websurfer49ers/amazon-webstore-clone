import React, { useEffect, useState } from "react";
import PhotoGallery from "./PhotoGallery.jsx";
import ItemInfo from "./ItemInfo.jsx";
import AddToCart from "./AddToCart.jsx";

function MainItem(props) {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/product/${props.productId}`, {
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
        <PhotoGallery productId={props.productId} />
        <ItemInfo item={item}/>
        <AddToCart price={price} soldout={soldout} productId={props.productId}/>
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
