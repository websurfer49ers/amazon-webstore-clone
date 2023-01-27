import React, { useState } from "react";
import { useRecoilState } from "recoil";
import imageState from "../../state.js";
import {
  imageIsSelected,
  defaultPosition,
  imageProperties,
} from "../../state.js";

function PhotoGallery() {
  const [selectedImage, setImage] = useRecoilState(imageState);
  const [isSelected, setIsSelected] = useRecoilState(imageIsSelected);
  const [mousePosition, setMousePosition] = useRecoilState(defaultPosition);
  const [imageProps, setImageProps] = useRecoilState(imageProperties);
  const imgElement = React.useRef(null);

  function enterThumbnail(event) {
    event.preventDefault();
    setImage(event.target.getAttribute("src"));
  }

  function enterMainPhoto() {
    setIsSelected(true);
  }

  function leaveMainPhoto() {
    setIsSelected(false);
  }

  function moveWithin(event) {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
  }

  function loadProperties(){
    setImageProps({
      height: imgElement.current.height,
      width: imgElement.current.width,
      naturalHeight: imgElement.current.naturalHeight,
      naturalWidth: imgElement.current.naturalWidth,
      x: imgElement.current.x,
      y: imgElement.current.y
    })
  }

  return (
    <div className="photoGallery">
      <div className="galleryThumbnailContainer">
        <div className="galleryThumbnail">
          <img
            src="https://amazon-webstore-clone-bucket.s3.amazonaws.com/613rrhRTmEL._AC_SL1200_.jpg"
            className="thumbnailImage"
            onMouseEnter={enterThumbnail}
          ></img>
        </div>
        <div className="galleryThumbnail">
          <img
            src="https://amazon-webstore-clone-bucket.s3.amazonaws.com/71YegV7wcQL._AC_SL1200_.jpg"
            className="thumbnailImage"
            onMouseEnter={enterThumbnail}
          ></img>
        </div>
      </div>
      <div className="mainPhotoContainer">
      <div>
        {mousePosition.x}, {mousePosition.y}
      </div>
        <img
          src={selectedImage}
          ref={imgElement}
          onLoad={loadProperties}
          className="mainPhoto"
          onMouseEnter={enterMainPhoto}
          onMouseLeave={leaveMainPhoto}
          onMouseMove={moveWithin}
        ></img>
      </div>
    </div>
  );
}

export default PhotoGallery;
