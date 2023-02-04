import React, { useEffect, useState } from "react";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import SponsoredItem from "./SponsoredItem.jsx";

export function Sponsored(props) {
  const [sponsoredArr, setSponsoredArr] = useState([]);
  const [iteratingNum, setIteratingNum] = useState(0);
  const arrOfImages = props.productIdArr;
  console.log(arrOfImages);
  return (
    <div>
      {arrOfImages.map((data) => (
        <SponsoredItem productId={data.id} />
      ))}
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
