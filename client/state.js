import { atom } from "recoil";

const ImageState = atom({
  key: "image",
  default: [null],
});

export default ImageState;

export const imageIsSelected = atom({
  key: "selected",
  default: false,
});

export const defaultPosition = atom({
  key: "position",
  default: [{ x: 0, y: 0 }],
});

export const imageProperties = atom({
  key: "imageProps",
  default: [
    { height: 0, width: 0, naturalHeight: 0, naturalWidth: 0, x: 0, y: 0 },
  ],
});

export const numOfRatingsRecoil = atom({
  key: "numOfRatingsRecoil",
  default: [0],
});

export const itemCategories = atom({
  key: "categoryAndSub",
  default: [["category", "subcategory"]],
});
