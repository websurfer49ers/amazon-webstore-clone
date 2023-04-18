import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import imageState from "../../state.js";
import {
  imageIsSelected,
  defaultPosition,
  imageProperties,
  itemCategories
} from "../../state.js";

function PhotoGallery(props) {
  /**********************************************************************************************************************************
   * - There is a ton going on in PhotoGallery.
   *
   * - IMPORTANT: there can be three images of the same photo: 1) thumbnail 2) "main photo" - which the photo that is displayed
   * after hovering over a thumbnail 3) "zoomed photo" - which is displayed in the ItemInfo component if the mouse is
   * hovering over the "main photo"
   *
   * - In a top-down order of the various Recoil states, values, and regular state below:
   * 1) selectedImage (Recoil value (RV) dubbed imageState) = string; the src of the photo you hover over in the thumbnail. Simultaneously gets displayed as the selected photo
   * in PhotoGallery component to the right of the thumbnails. Also gets sent to ItemInfo (to be able to be used as the zoomed
   * photo) via the Recoil way.
   * 2) isSelected (RV imageIsSelected)= boolean; used for toggling on and off if the mouse is over the main photo. Sent to ItemInfo
   * 3) mousePosition (RV defaultPosition)= object; x and y position values of the mouse within the main photo; sent to ItemInfo
   * 4) imageProps (RV imageProperties) = height and width of the main photo (main photo is actually shrunken down); natural height and width of the
   * actual photo (which is used as the zoomed photo); x and y values of the actual photo (top and left)
   * 5) thumbnails = array of the images (strings) retrieved from the fetch request, mapped out as thumbnaisl.
   * 6) mainCategory, subCategory (RV itemCategories) = the same Recoil values from of the main/sub categories set during MainItem; I also use these here
   * 7) imgElement = used as a reference for the main photo. It's pretty much allowing event.target.value, so that I can use the
   * current values for the values listed in imageProps.
   *
   * There are handler functions to use these states in the way I described them above, so I won't get into them.
   **********************************************************************************************************************************/
  const [selectedImage, setImage] = useRecoilState(imageState);
  const [isSelected, setIsSelected] = useRecoilState(imageIsSelected);
  const [mousePosition, setMousePosition] = useRecoilState(defaultPosition);
  const [imageProps, setImageProps] = useRecoilState(imageProperties);
  const [thumbnails, setThumbnails] = useState([]);
  const [mainCategory, subCategory] = useRecoilValue(itemCategories);
  const imgElement = React.useRef(null);

  useEffect(() => {
    fetch(`api/pictures/${props.productId}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((fetched) => {
        setThumbnails(fetched);
        setImage(fetched[0].pictureurl);
      });
  }, [props.productId]);

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
        <div className="evenMoreItems">{mainCategory}</div>
        <div className="evenMoreItems">›</div>
        <div className="evenMoreItems">{subCategory}</div>
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
