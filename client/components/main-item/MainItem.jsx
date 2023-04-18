import React, { useEffect, useState } from "react";
import PhotoGallery from "./PhotoGallery.jsx";
import ItemInfo from "./ItemInfo.jsx";
import AddToCart from "./AddToCart.jsx";
import { useRecoilState } from "recoil";
import { itemCategories } from "../../state.js";

function MainItem(props) {
  /*************************************************************************************************************************
  * - MainItem is the parent component for (left to right) PhotoGallery, ItemInfo, and AddToCart.
  *
  *
  *
  * - The fetch request to /api/product/x returns an object with everything associated with the product in an object. It is
  * saved as the useState variable, item.
  * - (I use a recoilState to capture the main/sub categories of the item because I have to ship it to the Navbar component.)
  * - The fetched object, item, is sent to: everything -> ItemInfo, item.price and item.soldout -> AddToCart.
  **************************************************************************************************************************/
  const [item, setItem] = useState({});
  const [mainCatAndSub, setItemCategories] = useRecoilState(itemCategories);

  useEffect(() => {
    fetch(`/api/product/${props.productId}`, {
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
        <ItemInfo item={item} productId={props.productId} />
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
