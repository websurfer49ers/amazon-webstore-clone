import React, { useState, useEffect } from "react";
import Header from "./navbar/Header.jsx";
import MainItem from "./main-item/MainItem.jsx";
import MainReviews from "./Reviews/MainReviews.jsx";
import QASearchBar from "./QASearchBar.jsx";

const App = () => {
  const [productId, setProductId] = useState(5);
  const [productIdArr, setProdIdArr] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/productIds`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((fetched) => {
        setProdIdArr(fetched);
      });
  }, []);


  return (
    <>
      <Header />
      <div className="underHeader">
        <MainItem productId={productId} />
        <QASearchBar productId={productId} />
        <MainReviews productIdArr={productIdArr} />
      </div>
    </>
  );
};

export default App;
