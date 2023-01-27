import React from "react";
import ChooseDept from "./ChooseDept.jsx";
import Language from "./Language.jsx";
import DeliverTo from "./DeliverTo.jsx";



function Search() {
  return (
    <div className="navbarSearch">
      <div className="searchBarContents logoDiv">
        <img src="../../logo/amazoom.png" className="logo"></img>
      </div>
      <DeliverTo />
      <div className="navbarSearchBarDiv">
        <ChooseDept />
        <input
          type="text"
          placeholder="Search Amazoom"
          className="navbarSearchBar"
        >
        </input>
      </div>
      <Language />
      <div className="searchBarContents">User</div>
      <div className="searchBarContents">Returns & Orders</div>
      <div className="searchBarContents">Cart</div>
    </div>
  );
}

export default Search;
