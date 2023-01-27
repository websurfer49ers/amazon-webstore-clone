import React, { useState } from "react";
import imageState from "../../state.js";
import { imageIsSelected, defaultPosition, imageProperties } from "../../state.js";
import { useRecoilValue } from "recoil";

function ItemInfo() {
  const boolean = useRecoilValue(imageIsSelected);
  const view = useRecoilValue(imageState);
  const position = useRecoilValue(defaultPosition);
  const properties = useRecoilValue(imageProperties);
  const [testMouse, setTestMouse] = useState({});
  const zoomedImg = React.useRef(null);

  function moveWithin(event) {
    setTestMouse({
      x: event.pageX,
      y: event.pageY,
    });
  }

  console.log(properties.x, properties.y)

  return (
    <div className="itemInfo" onMouseMove={moveWithin}>
      <div>
        {testMouse.x}, {testMouse.y}
      </div>
      {/* move object by pixel using position.x, position.y} */}
      {/*gotta figure out the math */}
      {true ? (
        <div className="zoomedContainer">
          <img
            src={view}
            className="zoomedPhoto"
            ref={zoomedImg}
            onLoad={()=> console.log(zoomedImg.current.x, zoomedImg.current.y)}
            style={{
              top: -position.y*(properties.naturalHeight / properties.height) + 405,
              left: -position.x*(properties.naturalWidth / properties.width) + 935,
            }}
          ></img>
        </div>
      ) : null}
    </div>
  );
}

export default ItemInfo;
