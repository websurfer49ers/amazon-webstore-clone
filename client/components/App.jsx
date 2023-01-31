import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Header from "./navbar/Header.jsx";
import MainItem from "./main-item/MainItem.jsx";
import MainReviews from "./Reviews/MainReviews.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  // const [tasks, setTasks] = useRecoilState(tasksState);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/tasks", {
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((tasks) => {
  //       setTasks(tasks);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <MainItem />
      <MainReviews />
      {/* <Rate /> */}
    </>
  );
};

export default App;
