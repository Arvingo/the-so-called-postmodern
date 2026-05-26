import type { TextInfo } from "../templateTypes/TextInfo.js";
export const defaultTextInfo: TextInfo = {
  id: "1",
  text: "Default message",
  color: "black",
  size: "16px",
  x: 50,
  y: 50,
};
export const info1: TextInfo = {
    id: "1",
    text: "Hello",
    color: "red",
    size: "20px",
    x: 50,
    y: 50,
    width: 60,
  };
export const info1_2: TextInfo = {
    id: "2",
    text: "Hello",
    color: "red",
    size: "40px",
    x: 20,
    y: 80,
    width: 30,
  };
export const info2: TextInfo = {
    id: "1",
    text: "Second message",
    color: "blue",
    size: "28px",
    x: 30,
    y: 50,
    width: 40,
  };
  export const info2_2: TextInfo = {
    id: "2",
    text: "HelloHelloHello HelloHelloHello HelloHelloHello HelloHelloHello HelloHello",
    color: "purple",
    size: "30px",
    x: 80,
    y: 50,
    width: 30,
  };
export const info3: TextInfo = {
    id: "1",
    text: "Third message",
    color: "green",
    size: "36px",
    x: 50,
    y: 30,
    width: 50,
    transitionOut: "fade",
  };
export const info3_2: TextInfo = {
    id: "2",
    text: "HelloHelloHello HelloHelloHello HelloHelloHello HelloHelloHello HelloHello",
    color: "purple",
    size: "30px",
    x: 80,
    y: 50,
    width: 30,
    highlightRanges: [{ start: 0, end: 50 }],
  };
export const info3_3: TextInfo = {
    id: "3",
    text: "POP",
    color: "goldenrod",
    size: "80px",
    x: 10,
    y: 60,
    width: 50,
    transitionIn: "fade",
  };