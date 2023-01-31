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
      <MainItem />
      <MainReviews />
      <QASearchBar productId={1}/>
      {/* <Rate /> */}
      <Footer />
    </>
  );
};

export default App;
