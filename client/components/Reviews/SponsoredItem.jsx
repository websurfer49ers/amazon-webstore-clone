import React, { useEffect, useState } from "react";


/**********************************************************************************
The function SponsoredItem is called for every product that is in the database through Sponsored.jsx. 

The fetch request returns the productName, imageurl and productId. The product name and the url for the image are saved as the useState variables productName and url.

The function SponsoredHandler sets the productId to the productId of the sponsored item that is clicked so that the page will contain the new information about the product that was clicked.

The div element with className "inner" is for the image and contains the styling for the image. The div element with className "text" is for the name of the product and contains all of the stylng for that as well. Both of these elements also have the SponsoredHandler function so that when they are clicked the page will change to the new product.

I also added in "href="#"" on line 68 so that when you click on the sponsored item, it will take you up to the top of the page when the new item is displayed.

*************************************************************************************/
function SponsoredItem(props) {
  const [url, setUrl] = useState("");
  const [productName, setProductname] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3000/api/sponsored/${props.productId}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((sponsored) => {
        setUrl(sponsored[0].pictureurl);
        setProductname(sponsored[0].productname);
      });
  }, [props.productId]);

  function SponsoredHandler(id) {
    props.setProductId(id);
  }

  return (
    <div
      style={{
        flex: "20%",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <div className="inner">
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
      </div>
      <div
        className="text"
        style={{
          textAlign: "left",
          whiteSpace: "normal",
          letterSpacing: "normal",
          textDecoration: "none",
          fontSize: "15px",
        }}
      >
        <a
          onClick={() => {
            SponsoredHandler(props.productId);
          }}
          href="#"
          style={{
            textDecoration: "none",
          }}
        >
          {productName}
        </a>
      </div>
    </div>
  );
}

export default SponsoredItem;
