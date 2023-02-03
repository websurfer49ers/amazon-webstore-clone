import React from "react";
import Header from "./navbar/Header.jsx";
import MainItem from "./main-item/MainItem.jsx";
import MainReviews from "./Reviews/MainReviews.jsx";
import QASearchBar from "./QASearchBar.jsx";

const App = () => {

  return (
    <>
      <Header />
      <div className="underHeader">
        <MainItem />
        <QASearchBar productId={1} />
        <MainReviews />
      </div>
    </>
  );
};

export default App;
