import React, { useState, useEffect } from "react";
import imageState from "../../state.js";
import { Rate } from "../Reviews/Rating.jsx";
import {
  imageIsSelected,
  defaultPosition,
  imageProperties,
  numOfRatingsRecoil,
  itemCategories,
} from "../../state.js";
import { useRecoilValue } from "recoil";

function ItemInfo(props) {
  const boolean = useRecoilValue(imageIsSelected);
  const view = useRecoilValue(imageState);
  const position = useRecoilValue(defaultPosition);
  const properties = useRecoilValue(imageProperties);
  const numOfRatings = useRecoilValue(numOfRatingsRecoil);
  const [testMouse, setTestMouse] = useState({});
  const [freeReturnBox, setFreeReturnBox] = useState(false);
  const [questions, setQuestions] = useState(0);
  const [smallBusinessBox, setSmallBusinessBox] = useState(false);
  const zoomedImg = React.useRef(null);
  const zoomedContainer = React.useRef(null);
  const {
    productname,
    brand,
    price,
    material,
    size,
    theme,
    item_dimensions,
    description,
    amazon_choice,
    item_form,
    diet_type,
    flavor,
    special_ingredients,
    pkg_info,
    unit_count,
    num_of_items,
    dosage_form,
    color,
    plant_animal_product,
    use_for_product,
  } = props.item;

  const iterableObj = {
    Brand: brand,
    Material: material,
    Size: size,
    Theme: theme,
    "Item Dimensions": item_dimensions,
    "Item Form": item_form,
    "Diet Type": diet_type,
    Flavor: flavor,
    "Special Ingredients": special_ingredients,
    "Package Information": pkg_info,
    "Unit Count": unit_count,
    "Number of Items": num_of_items,
    "Dosage Form": dosage_form,
    Color: color,
    "Plant or Animal Product": plant_animal_product,
    "Specific Uses For Product": use_for_product,
  };

  useEffect(() => {
    fetch(`http://localhost:3000/api/countquestions/${props.productId}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((fetched) => {
        setQuestions(fetched.totalquestions);
      });
  }, [props.productId]);

  function moveWithin(event) {
    setTestMouse({
      x: event.pageX,
      y: event.pageY,
    });
  }
  // console.log(properties);

  function openFreeReturnBox() {
    setFreeReturnBox(true);
  }

  function closeFreeReturnBox() {
    setFreeReturnBox(false);
  }

  function openSmallBusinessBox() {
    setSmallBusinessBox(true);
  }

  function closeSmallBusinessBox() {
    setSmallBusinessBox(false);
  }

  return (
    <div className="itemInfo" onMouseMove={moveWithin}>
      <div className="lazySpacer"></div>
      {/* <div>
        {testMouse.x}, {testMouse.y}
      </div> */}
      {/* move object by pixel using position.x, position.y} */}
      {/*gotta figure out the math */}
      {boolean ? (
        <div className="zoomedContainer" ref={zoomedContainer}>
          <img
            src={view}
            className="zoomedPhoto"
            ref={zoomedImg}
            // onLoad={() => console.log(zoomedImg.current.x, zoomedImg.current.y)}
            style={{
              top:
                -position.y * (properties.naturalHeight / properties.height) +
                700,
              left:
                -position.x * (properties.naturalWidth / properties.width) +
                1000,
            }}
          ></img>
        </div>
      ) : null}

      <>
        <div className="MainInfoProductNameDiv">
          <h2 className="MainInfoProductName">{productname}</h2>
          <a>Brand: {brand}</a>
          <br></br>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <span style={{ margin: "0px 5px 0px -2px" }}>
              <Rate productId={props.productId}/>
            </span>
            <a style={{ marginRight: "5px" }} href="#mainReviewsDiv">{numOfRatings} ratings</a>{" "}
            {questions ? (
              <>
                <span style={{ color: "gray", marginRight: "5px" }}>|</span>
                <a href="#QASearchBar">{questions} answered questions</a>
              </>
            ) : null}
          </div>
          <br></br>
          {amazon_choice ? (
            <>
              <span
                style={{
                  backgroundColor: "#232f3e",
                  color: "white",
                  padding: "4px",
                  fontSize: "12px",
                  float: "left",
                }}
              >
                Amazoom's <span style={{ color: "darkorange" }}>Choice</span>
              </span>
              <span className="AmazonChoiceTriangle"></span> for "
              <a>{productname ? productname.toLowerCase() : null}</a>"<br></br>
            </>
          ) : null}
        </div>
        <hr className="MainItemDividerColor"></hr>
        <div className="MainInfoDetails">
          <div className="priceDiv">
            <span style={{ fontSize: "13px" }}>$</span>
            <span style={{ fontSize: "28px", verticalAlign: "text-top" }}>
              {price ? price.slice(1, price.length - 3) : null}
            </span>
            <span style={{ fontSize: "13px" }}>
              {price
                ? price.charAt(price.length - 2) +
                  price.charAt(price.length - 1)
                : null}
            </span>
          </div>
          <img src="../../logo/primelogo.png"></img> <br></br>
          <div className="messageBoxWrapper">
            <a onClick={openFreeReturnBox}>FREE Returns</a>
            {freeReturnBox ? (
              <>
                <div className="messageBoxOverlay" onClick={closeFreeReturnBox}>
                  {" "}
                </div>
                <div className="messageBox">
                  <button
                    className="closeMessageBox"
                    onClick={closeFreeReturnBox}
                  >
                    <b>X</b>
                  </button>
                  <b>Return this item for free</b> <br></br>
                  <br></br>
                  Free returns are available for the shipping address you chose.
                  You can return the item for any reason in new and unused
                  condition: no shipping charges.
                  <br></br>
                  <a>Learn more about free returns.</a> <br></br>
                  <a>How to return the item?</a>
                  <div className="boxTriangle"></div>
                  <div className="boxTriangleOuter"></div>
                </div>
              </>
            ) : null}
          </div>
          <br></br>
          <br></br>
          <a>
            Thank you for being a Prime member. Get a $100 Gift Card: Pay $0.00
            upon approval for the Amazoom Prime Rewards Visa Card. No annual
            fee.
          </a>
          <br></br>
          <br></br>
          May be available at a lower price from <a>other sellers</a>,
          potentially without free Prime shipping.
          <table className="MainInfoGrid">
            <tbody>
              {Object.entries(iterableObj).map(([keys, value]) => {
                if (value != null) {
                  return (
                    <tr key={productname + keys}>
                      <td className="MainInfoGridInfo">{keys}</td>
                      <td>{value}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <hr className="MainItemDividerColor"></hr>
        <div className="MainInfoAboutThisItemDiv">
          <h4 className="MainInfoAboutThisItem">About this item</h4>
          <ul className="whyDoesThisULNeedASeparateClassCSSIsAnnoyingSometimes">
            {description
              ? description.map((bullet) => {
                  return <li key={Math.random() * Math.random()}>{bullet}</li>;
                })
              : null}
          </ul>
        </div>
        <hr className="MainItemDividerColor"></hr>
        <div>
          <h4 className="MainInfoAboutThisItem">Additional Details</h4>
          <div style={{ display: "flex", fontSize: "14px" }}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ marginRight: "10px" }}
              >
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
              </svg>
            </div>
            <div>
              <div style={{ marginBottom: "6px" }}>Small Business</div>
              <span style={{ color: "#565959" }}>
                This product is from a small business brand. Support small.{" "}
              </span>
              <div className="messageBoxWrapper">
                <a onClick={openSmallBusinessBox}>Learn more</a>
                {smallBusinessBox ? (
                  <>
                    <div
                      className="messageBoxOverlay"
                      onClick={closeSmallBusinessBox}
                    >
                      {" "}
                    </div>
                    <div className="messageBox">
                      <button
                        className="closeMessageBox"
                        onClick={closeSmallBusinessBox}
                      >
                        <b>X</b>
                      </button>
                      <b>Small Business</b> <br></br>
                      <br></br>
                      Shop products from small business brands sold in Amazon’s
                      store. Discover more about the small businesses partnering
                      with Amazon and Amazon’s commitment to empowering them.
                      <br></br>
                      <br></br>
                      <a>Learn more.</a> <br></br>
                      <div className="boxTriangle"></div>
                      <div className="boxTriangleOuter"></div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </>
      <a style={{ fontSize: "14px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 12"
          style={{ color: "rgb(60, 60, 60)", marginRight: "10px" }}
        >
          <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
        </svg>
        Report incorrect product information.
      </a>
    </div>
  );
}

export default ItemInfo;
