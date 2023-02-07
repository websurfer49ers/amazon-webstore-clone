import React, { useEffect, useState } from "react";
import { BiCaptions } from "react-icons/bi";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import SponsoredItem from "./SponsoredItem.jsx";

export function Sponsored(props) {
  const [sponsoredArr, setSponsoredArr] = useState([]);
  const [iteratingNum, setIteratingNum] = useState(0);

  const arrOfImages = props.productIdArr;
  console.log(arrOfImages);

  return (
    <div>
        <h1 className="sponsored"
            style={{
            color: "#C60",
            fontSize: "16px",
            fontFamily: "verdana,arial,helvetica,sans-serif",
            boxSizing: "bprder-box",
            }}>Popular products based on this item</h1>
        <div 
        style={{
            display: "flex",
        }}>
        {arrOfImages.map((data) => (
            <SponsoredItem productId={data.id} setProductId={props.setProductId} />
        ))}
        </div>
    </div>
  );









  
  // <span>
  //   <div className="sponsoredItemDiv">
  //     <h2 className="sponsored">Popular products based on this item</h2>
  //   </div>
  //   <div className="image">
  //     <img
  //     //   src={imageUrl}
  //       style={{
  //         maxHeight: "160px",
  //         maxWidth: "160px",
  //         verticalAlign: top,
  //         border: 0,
  //       }}
  //     ></img>
  //   </div>
  // </span>
}