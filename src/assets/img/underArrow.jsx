import React from "react";

const UnderArrowIcon = ({ width = 25, height = 25, color = "#898989" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.54062 8.09863L12.1306 12.6786L16.7206 8.09863L18.1306 9.50863L12.1306 15.5086L6.13062 9.50863L7.54062 8.09863Z"
        fill={color}
      />
    </svg>
  );
};

export default UnderArrowIcon;
