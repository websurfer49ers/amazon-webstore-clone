import React from "react";
import { useRecoilValue } from "recoil";
import { itemCategories } from "../../state.js";

function SubCategories() {
  const category = useRecoilValue(itemCategories)[0];
  console.log(category);

  if (category == "Toys & Games") {
    return (
      <div className="navbarSubCategories">
        <div className="navbarSubCategoryItem mainSubCatItem">{category}</div>
        <div className="navbarSubCategoryItem">Gifts for Lance</div>
        <div className="navbarSubCategoryItem">Kids Gift Guide</div>
        <div className="navbarSubCategoryItem">Shop Toys by Character</div>
        <div className="navbarSubCategoryItem">Shop Best Selling Toys</div>
        <div className="navbarSubCategoryItem">Shop Newly Release Toys</div>
        <div className="navbarSubCategoryItem">Shop Amazoom Exclusive Toys</div>
        <div className="navbarSubCategoryItem">Shop Toy Deals</div>
        <div className="navbarSubCategoryItem">Create a Birthday Gift List</div>
        <div className="navbarSubCategoryItem">Create a Holiday Gift List</div>
      </div>
    );
  }
  if (category == "Health & Household"){
    return (
      <div className="navbarSubCategories">
        <div className="navbarSubCategoryItem mainSubCatItem">{category}</div>
        <div className="navbarSubCategoryItem">Snacks for Danny</div>
        <div className="navbarSubCategoryItem">Household Supplies</div>
        <div className="navbarSubCategoryItem">Vitamin & Diet Supplements</div>
        <div className="navbarSubCategoryItem">Baby & Child Care</div>
        <div className="navbarSubCategoryItem">Health Care</div>
        <div className="navbarSubCategoryItem">Sports Nutrition</div>
        <div className="navbarSubCategoryItem">Health & Wellness</div>
        <div className="navbarSubCategoryItem">Medical Supplies & Supplements</div>
        <div className="navbarSubCategoryItem">Subscribe & Save</div>
      </div>
    );
  }
  if (category == "Home & Kitchen"){
    return (
      <div className="navbarSubCategories">
        <div className="navbarSubCategoryItem mainSubCatItem">{category}</div>
        <div className="navbarSubCategoryItem">Supply for Jersen</div>
        <div className="navbarSubCategoryItem">Home Décor</div>
        <div className="navbarSubCategoryItem">Alternative Medicine</div>
        <div className="navbarSubCategoryItem">Vitamin & Diet Supplements</div>
        <div className="navbarSubCategoryItem">Health Care</div>
        <div className="navbarSubCategoryItem">Sports Nutrition</div>
        <div className="navbarSubCategoryItem">Health & Wellness</div>
        <div className="navbarSubCategoryItem">Medical Supplies & Supplements</div>
        <div className="navbarSubCategoryItem">Subscribe & Save</div>
      </div>
    );
  }
}

export default SubCategories;
