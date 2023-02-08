import React, { useEffect, useState } from "react";
import { BiCaptions } from "react-icons/bi";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import SponsoredItem from "./SponsoredItem.jsx";

export function Sponsored(props) {
  const [sponsoredArr, setSponsoredArr] = useState([]);
  const [iteratingNum, setIteratingNum] = useState(0);
  const arrOfImages = props.productIdArr;

  return (
    <div style={{display:"flex"}}>
      {arrOfImages.map((data) => (
        <SponsoredItem productId={data.id} setProductId={props.setProductId} key={Math.random()}/>
      ))}
    </div>
  );
}
