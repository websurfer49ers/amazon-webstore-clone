import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Header from "./navbar/Header.jsx";
import MainItem from "./main-item/MainItem.jsx";
import Footer from "./Footer.jsx";
// import Rate from "./Reviews/Rating.jsx";
import { tasksState } from "../state.js";

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
      {/* <Rate /> */}
      <Footer />

    </>
  );
};

export default App;
