import React from "react";
import state from "../Store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = type => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderwidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1  rounded-full ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
