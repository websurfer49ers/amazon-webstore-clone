import React from "react";
import imageState from "../../state.js";
import { imageIsSelected, defaultPosition } from "../../state.js";
import { useRecoilValue } from "recoil";

function ItemInfo() {
  const boolean = useRecoilValue(imageIsSelected);
  const view = useRecoilValue(imageState);
  const position = useRecoilValue(defaultPosition);
  return (
    <div className="itemInfo">
      {boolean ? <img src={view} className="zoomedPhoto"></img> : null}
    </div>
  );
}

export default ItemInfo;
