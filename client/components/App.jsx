import React from "react";
import Header from "./navbar/Header.jsx";
import MainItem from "./main-item/MainItem.jsx";
import MainReviews from "./Reviews/MainReviews.jsx";
import Footer from "./Footer.jsx";
import QASearchBar from "./QASearchBar.jsx";

const App = () => {

  return (
    <>
      <Header />
      <div className="underHeader">
        <MainItem />
        <QASearchBar/>
        <MainReviews />
      </div>
    </>
  );
};

export default App;
