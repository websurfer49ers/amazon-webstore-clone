import React from "react";
import Header from "./navbar/Header.jsx";
import MainItem from "./main-item/MainItem.jsx";
import MainReviews from "./Reviews/MainReviews.jsx";
import QASearchBar from "./QASearchBar.jsx";

const App = () => {

  const [productId, setProductId] = useState(2)

  return (
    <>
      <Header />
      <div className="underHeader">
        <MainItem productId={productId} />
        <QASearchBar productId={productId} />
        <MainReviews productId={productId} />
      </div>
    </>
  );
};

export default App;
