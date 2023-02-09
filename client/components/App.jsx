import React, { useState, useEffect } from "react";
import Header from "./navbar/Header.jsx";
import MainItem from "./main-item/MainItem.jsx";
import MainReviews from "./Reviews/MainReviews.jsx";
import QASearchBar from "./QASearchBar.jsx";
import Footer from "./Footer.jsx";
import { Sponsored } from "./Reviews/Sponsored.jsx";

const App = () => {
  /******************************************************************************************************************************
  * - Below are codes to make the products dynamically retrievable:
  *
  * - The useState variable, productId, is spread out all over this app and all the fetch requests that are made are dynamically
  * generated from whatever the value it is.
  * - There is a fetch request to a route that returns all productIds in an array. this array is passed to the Sponsored component
  * so that the productid can be mapped out to the Sponsored component's subcomponent, SponsoredItem.jsx.
  *******************************************************************************************************************************/
  const [productId, setProductId] = useState(1);
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
        <Sponsored productIdArr={productIdArr} setProductId={setProductId} />
        <QASearchBar productId={productId} />
        <MainReviews productIdArr={productIdArr} productId={productId} />
      </div>
      <Footer />
    </>
  );
};

export default App;
