import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import Header from "./navbar/Header.jsx";
import MainItem from "./main-item/MainItem.jsx";
import MainReviews from "./Reviews/MainReviews.jsx";
import Footer from "./Footer.jsx";
import QASearchBar from "./QASearchBar.jsx";

const App = () => {
  const tasksState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
  const [tasks, setTasks] = useRecoilState(tasksState);

  useEffect(() => {
    fetch("http://localhost:5173/api/product/", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((tasks) => {
        console.log(tasks)
        setTasks(tasks);
      });
  }, []);


  return (
    <>
      <Header />
      <MainItem />
      <MainReviews />
      <QASearchBar/>
      {/* <Rate /> */}
      <Footer />
    </>
  );
};

export default App;
