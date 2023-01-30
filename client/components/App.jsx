import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Header from "./navbar/Header.jsx";
import MainItem from "./main-item/MainItem.jsx";
import MainReviews from "./Reviews/MainReviews.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  // const [tasks, setTasks] = useRecoilState(tasksState);

<<<<<<< HEAD
  useEffect(() => {
    fetch("http://localhost:3000/api/tasks", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);
// lucas verifying authentication. Can delete this comment
=======
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/tasks", {
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((tasks) => {
  //       setTasks(tasks);
  //     });
  // }, []);

>>>>>>> 1cc5f90fdb4d50be3e508fddfa6371585aa7cf12
  return (
    <>
      <Header />
      <MainItem />
      <MainReviews />
      {/* <Rate /> */}
      <Footer />
    </>
  );
};

export default App;
