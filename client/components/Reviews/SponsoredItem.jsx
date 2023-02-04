import React, { useEffect, useState } from "react";

function SponsoredItem(props){
  useEffect(() => {
    fetch(`http://localhost:3000/api/sponsored/${props.productId}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((sponsored) => {
        console.log(sponsored);
      });
  }, []);
}

export default SponsoredItem