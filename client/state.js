import { atom } from "recoil";

const ImageState = atom({
  key: "image",
  default: [
    "https://amazon-webstore-clone-bucket.s3.amazonaws.com/613rrhRTmEL._AC_SL1200_.jpg",
  ],
});

export default ImageState;

export const imageIsSelected = atom({
  key: "selected",
  default: false,
});

export const defaultPosition = atom({
  key: "position",
  default: [{x: 0, y: 0}]
});
