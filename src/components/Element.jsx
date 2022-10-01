import React from "react";
import "./Element.css";
import { colorMap } from "../common/common";

const Element = ({ element, handleElement }) => {
  return (
    <div
      className="element"
      style={{
        gridColumn: element.xpos,
        gridRow: element.ypos,
        borderColor: colorMap[element.category],
      }}
      onClick={() => handleElement(element)}
    >
      <strong>{element.symbol}</strong>
      <small className="number">{element.number}</small>
      <small className="name">{element.name}</small>
    </div>
  );
};

export default Element;
