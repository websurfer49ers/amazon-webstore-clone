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
        setProductname(sponsored[0].productname)
        console.log(sponsored);
      });
  }, [props.productId]);

  function SponsoredHandler(id) {
    props.setProductId(id)
  }

    return (
      <div classname="sponsoredItem" 
      style={{
        flex: "20%",
        textAlign:"center",
        padding: "10px"
      }}> 
        <div className="inner">
            <img onClick={() => {SponsoredHandler(props.productId)}}
              src={url}
              style={{
                maxHeight: "160px",
                maxWidth: "160px",
                verticalAlign: top,
                border: 0,
              }}
            ></img>
          </div>
          <div className="text" 
          style={{
            textAlign: "left",
            whiteSpace: "normal",
            letterSpacing: "normal",
            textDecoration: "none",
            fontSize: "15px"
          }}>
            <a onClick={() => {SponsoredHandler(props.productId)}} href="#" 
            style={{
              textDecoration: "none"
            }}>
              {productName}</a>
          </div>
        </div>
        
        
    );
}

export default SponsoredItem;
