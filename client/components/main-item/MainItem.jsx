import React from "react";
import PhotoGallery from "./PhotoGallery.jsx";
import ItemInfo from "./ItemInfo.jsx";
import AddToCart from "./AddToCart.jsx";


function MainItem(){
  return (
    <div className="mainItemDiv">
      <PhotoGallery />
      <ItemInfo />
      <AddToCart />
    </div>
  )
}

export default MainItem