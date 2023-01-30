import React from "react";

function Language() {
  return (
    <div className="searchBarContents chooseLanguage">
      <img src="../../logo/flag.jpg" className="flagForLanguage"></img><span>EN</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="8"
        fill="currentColor"
        class="bi bi-caret-down-fill"
        viewBox="0 0 16 9"
        color="rgb(206, 202, 202)"
        className="triangleDown"

      >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    </div>
  );
}
export default Language;
