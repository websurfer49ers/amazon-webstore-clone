import React, { useEffect, useState } from "react";
import { BiCaptions } from "react-icons/bi";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import SponsoredItem from "./SponsoredItem.jsx";

/**********************************************************************************
The function SponsoredItem is the parent component for SponsoredItem.jsx

The constant variable arrOfImages is an array of objects containing the product Id for each product in the database. In the return statement we use map to call SponsoredItem on every product and display the image and name from SponsoredItem.jsx. We also pass in productId and setProductId so that new products can be displayed on the page.

*************************************************************************************/

export function Sponsored(props) {
  const [sponsoredArr, setSponsoredArr] = useState([]);
  const [iteratingNum, setIteratingNum] = useState(0);
  const arrOfImages = props.productIdArr;
  console.log(arrOfImages)

  return (
    <div style={{display:"flex"}}>
      {arrOfImages.map((data) => (
        <SponsoredItem productId={data.id} setProductId={props.setProductId} key={Math.random()}/>
      ))}
    </div>
  );
}
