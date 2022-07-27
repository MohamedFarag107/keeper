import React from "react";
import { useSelector } from "react-redux";

function Colors({ colorName }) {
  const colors = useSelector((state) => state.colors);
  return (
    <div className="flex gap-2 p-2">
      {colors.map((color) => (
        <span
          key={color.name}
          onClick={() => colorName(color.name)}
          style={{ backgroundColor: color.lightBG, borderColor: color.text }}
          className={`w-8 h-8 rounded-sm block border`}
        ></span>
      ))}
    </div>
  );
}

export default Colors;
