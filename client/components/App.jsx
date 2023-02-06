import React, { useState, useEffect } from "react";
import Header from "./navbar/Header.jsx";
import MainItem from "./main-item/MainItem.jsx";
import MainReviews from "./Reviews/MainReviews.jsx";
import QASearchBar from "./QASearchBar.jsx";
import Footer from "./Footer.jsx";
import { Sponsored } from "./Reviews/Sponsored.jsx";


const App = () => {
  const [productId, setProductId] = useState(1);
  const [productIdArr, setProdIdArr] = useState([]);

  useEffect(() => {
    fetch(`/api/productIds`, {
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
        <Sponsored productIdArr={productIdArr} setProductId={setProductId} />
        <MainReviews productIdArr={productIdArr} productId={productId} />
      </div>
      <Footer />
    </>
  );
};

export default App;
