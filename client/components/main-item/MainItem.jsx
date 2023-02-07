import React, { useEffect, useState } from "react";
import PhotoGallery from "./PhotoGallery.jsx";
import ItemInfo from "./ItemInfo.jsx";
import AddToCart from "./AddToCart.jsx";
import { useRecoilState } from "recoil";
import { itemCategories } from "../../state.js";

function MainItem(props) {
  const [item, setItem] = useState({});
  const [mainCatAndSub, setItemCategories] = useRecoilState(itemCategories);

  useEffect(() => {
    fetch(`http://localhost:3000/api/product/${props.productId}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((fetched) => {
        setItem(fetched[0]);
        setItemCategories([fetched[0].category, fetched[0].sub_category])
      });
  }, [props.productId]);
  const price = item.price;
  const soldout = item.soldout;

  return (
    <>
      <div className="mainItemDiv">
        <PhotoGallery productId={props.productId} />
        <ItemInfo item={item} productId={props.productId}/>
        <AddToCart
          price={price}
          soldout={soldout}
          productId={props.productId}
        />
      </div>
      <hr
        style={{
          backgroundColor: "rgb(180, 180, 180)",
          height: "1px",
          border: 0,
        }}
      ></hr>
    </>
  );
}

export default MainItem;
