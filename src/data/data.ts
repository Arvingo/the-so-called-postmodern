import type { TextInfo } from "../TextInfo.js";
//y is from the top
//x is from the left
export const textInfos: TextInfo[] = [
  {
    text: "Hello",
    color: "red",
    size: "20px",
    x: 50,
    y: 50,
    width: 60,
  },
  {
    text: "Second message",
    color: "blue",
    size: "28px",
    x: 30,
    y: 50,
    width: 40,
  },
  {
    text: "Third message",
    color: "green",
    size: "36px",
    x: 50,
    y: 30,
    width: 50,
  },
];
export const defaultTextInfo: TextInfo = {
  text: "Default message",
  color: "black",
  size: "16px",
  x: 50,
  y: 50,
};