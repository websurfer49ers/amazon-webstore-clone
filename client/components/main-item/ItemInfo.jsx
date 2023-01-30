import React, { useState } from "react";
import imageState from "../../state.js";
import {
  imageIsSelected,
  defaultPosition,
  imageProperties,
} from "../../state.js";
import { useRecoilValue } from "recoil";

function ItemInfo() {
  const boolean = useRecoilValue(imageIsSelected);
  const view = useRecoilValue(imageState);
  const position = useRecoilValue(defaultPosition);
  const properties = useRecoilValue(imageProperties);
  const [testMouse, setTestMouse] = useState({});
  const zoomedImg = React.useRef(null);
  const zoomedContainer = React.useRef(null);

  function moveWithin(event) {
    setTestMouse({
      x: event.pageX,
      y: event.pageY,
    });
  }
  // console.log(properties);

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
                405,
              left:
                -position.x * (properties.naturalWidth / properties.width) +
                700,
            }}
          ></img>
        </div>
      ) : null}
      <div className="MainInfoProductNameDiv">
        <h2 className="MainInfoProductName">Mcphee Archie Handi Squirrel</h2>
        Brand: Mcphee<br></br>
        3,496 ratings | 14 answered questions<br></br>
        Amazoom's Choice for "archie mcphee"<br></br>
      </div>
      <hr></hr>
      <div className="MainInfoDetails">
        <h2 className="MainInfoPrice">7.89</h2>
        Brand:Mcphee<br></br>
        Material: Cotton<br></br>
        Size: 8"<br></br>
        Theme: Animal <br></br>
        Item Dimsensions 5.52 x 4.05 x 1.73 inches
      </div>
      <hr></hr>
      <div className="MainInfoAboutThisItemDiv"></div>
      <h4 className="MainInfoAboutThisItem">About this item</h4>
    </div>
  );
}

export default ItemInfo;
