import React from "react";

function Categories() {
  return (
    <div className="navbarCategories">
      <div className="navbarCategoryItem allItemCategory">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="16"
          stroke-width="13"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 12 12"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        All
      </div>
      <div className="navbarCategoryItem">Clinic</div>
      <div className="navbarCategoryItem">Customer Service</div>
      <div className="navbarCategoryItem">Prime Video</div>
      <div className="navbarCategoryItem">Amazoom Basics</div>
      <div className="navbarCategoryItem">Best Sellers</div>
      <div className="navbarCategoryItem">Prime</div>
      <div className="navbarCategoryItem">Today's Deals</div>
      <div className="navbarCategoryItem">New Releases</div>
      <div className="navbarCategoryItem">Music</div>
      <div className="navbarCategoryItem">Books</div>
      <div className="navbarCategoryItem">Registry</div>
      <div className="navbarCategoryItem">Fashion</div>
      <div className="navbarCategoryItem">Amazoom Home</div>
      <div className="navbarCategoryItem">Gift Cards</div>
      <div className="navbarCategoryItem">Pharmacy</div>
      <div className="navbarCategoryItem">Toys & Games</div>
      <div className="navbarCategoryItem">Sell</div>
      <div className="navbarCategoryItem">Coupons</div>
      <div className="navbarCategoryItem">Computers</div>
    </div>
  );
}

export default Categories;
