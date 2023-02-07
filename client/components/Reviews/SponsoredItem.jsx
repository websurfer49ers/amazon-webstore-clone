import React, { useEffect, useState } from "react";

function SponsoredItem(props) {
  const [url, setUrl] = useState("");
  const [productName, setProductname] = useState("");
  console.log(props.productId);
  useEffect(() => {
    fetch(`http://localhost:3000/api/sponsored/${props.productId}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((sponsored) => {
        setUrl(sponsored[0].pictureurl);
        console.log(sponsored);
      });
  }, [props.productId]);

  function SponsoredHandler(id) {
    props.setProductId(id);
    console.log("clicked");
  }

  return (
    <a href="#topOfPage">
      <img
        onClick={() => {
          SponsoredHandler(props.productId);
        }}
        src={url}
        style={{
          maxHeight: "160px",
          maxWidth: "160px",
          verticalAlign: top,
          border: 0,
        }}
      ></img>
    </a>
  );
}

export default SponsoredItem;
