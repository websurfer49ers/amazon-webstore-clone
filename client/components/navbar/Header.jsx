import React from "react";
import Search from "./Search.jsx";
import Categories from "./Categories.jsx";
import SubCategories from "./SubCategories.jsx";

function Header() {
  return (
    <div>
      <Search />
      <Categories />
      <SubCategories />
    </div>
  );
}

export default Header;
