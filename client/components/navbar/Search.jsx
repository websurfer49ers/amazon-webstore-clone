import React from "react";

function Search() {
  return (
    <div className="navbarSearch">
      <div className="addressDiv">Logo</div>
      <div className="addressDiv">Address</div>
      <div className="navbarSearchBarDiv">
        <input
          type="text"
          placeholder="Search an item"
          className="navbarSearchBar"
        ></input>
      </div>
      <div className="addressDiv">Language</div>
      <div className="addressDiv">User</div>
      <div className="addressDiv">Returns & Orders</div>
      <div className="addressDiv">Cart</div>
    </div>
  );
}

export default Search;
