import React from "react";
import ChooseDept from "./ChooseDept.jsx";

function Search() {
  return (
    <div className="navbarSearch">
      <div className="searchBarContents">
        <img src="../../logo/amazoom.png" className="logo"></img>
      </div>
      <div className="searchBarContents">
        <div className="deliverTo">Deliver to Websurfer49</div>
        <div className="fakeCity">Fakecity 12345</div>
      </div>
      <div className="navbarSearchBarDiv">
        <ChooseDept />
        <input
          type="text"
          placeholder="Search Amazoom"
          className="navbarSearchBar"
        >
        </input>
      </div>
      <div className="searchBarContents">Language</div>
      <div className="searchBarContents">User</div>
      <div className="searchBarContents">Returns & Orders</div>
      <div className="searchBarContents">Cart</div>
    </div>
  );
}

export default Search;
