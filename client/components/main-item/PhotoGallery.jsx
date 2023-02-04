import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import imageState from "../../state.js";
import {
  imageIsSelected,
  defaultPosition,
  imageProperties,
} from "../../state.js";

function PhotoGallery(props) {
  const [selectedImage, setImage] = useRecoilState(imageState);
  const [isSelected, setIsSelected] = useRecoilState(imageIsSelected);
  const [mousePosition, setMousePosition] = useRecoilState(defaultPosition);
  const [imageProps, setImageProps] = useRecoilState(imageProperties);
  const [thumbnails, setThumbnails] = useState([]);
  const imgElement = React.useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/pictures/${props.productId}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((fetched) => {
        setThumbnails(fetched);
        setImage(fetched[0].pictureurl);
      });
  }, []);

  function enterThumbnail(event) {
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

  function loadProperties() {
    setImageProps({
      height: imgElement.current.height,
      width: imgElement.current.width,
      naturalHeight: imgElement.current.naturalHeight,
      naturalWidth: imgElement.current.naturalWidth,
      x: imgElement.current.x,
      y: imgElement.current.y,
    });
  }

  return (
    <div className="photoGallery">
      <div className="evenMoreCategories">
        <div className="evenMoreItems">Toys & Games</div>
        <div className="evenMoreItems">›</div>
        <div className="evenMoreItems">Puppets & Puppet Theaters</div>
        <div className="evenMoreItems">›</div>
        <div className="evenMoreItems">Finger Puppets</div>
      </div>
      <div className="thumbnailAndMainPhoto">
        <div className="galleryThumbnailContainer">
          {thumbnails
            ? thumbnails.map((picture) => {
                return (
                  <div className="galleryThumbnail" key={picture.pictureurl}>
                    <img
                      src={picture.pictureurl}
                      className="thumbnailImage"
                      onMouseEnter={enterThumbnail}
                    ></img>
                  </div>
                );
              })
            : null}
        </div>
        <div className="mainPhotoContainer">
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
        <button className="shareButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
            <path d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PhotoGallery;
