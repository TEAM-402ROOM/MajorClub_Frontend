import React from "react";

const ReturnIcon = ({ width = 25, height = 25 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3666 3.06265C10.5351 3.2314 10.6298 3.46015 10.6298 3.69865C10.6298 3.93715 10.5351 4.1659 10.3666 4.33465L8.90257 5.79865H13.3306C14.8139 5.79865 16.264 6.23851 17.4973 7.06262C18.7307 7.88673 19.692 9.05807 20.2597 10.4285C20.8273 11.799 20.9758 13.307 20.6865 14.7618C20.3971 16.2167 19.6828 17.5531 18.6339 18.6019C17.585 19.6508 16.2486 20.3651 14.7937 20.6545C13.3389 20.9439 11.8309 20.7954 10.4604 20.2277C9.08999 19.6601 7.91865 18.6988 7.09454 17.4654C6.27043 16.2321 5.83057 14.782 5.83057 13.2986C5.83057 13.06 5.92539 12.831 6.09417 12.6623C6.26295 12.4935 6.49187 12.3986 6.73057 12.3986C6.96926 12.3986 7.19818 12.4935 7.36696 12.6623C7.53575 12.831 7.63057 13.06 7.63057 13.2986C7.63057 14.426 7.96487 15.528 8.59119 16.4654C9.21751 17.4028 10.1077 18.1333 11.1493 18.5648C12.1908 18.9962 13.3369 19.1091 14.4426 18.8891C15.5483 18.6692 16.5639 18.1263 17.3611 17.3292C18.1582 16.532 18.7011 15.5164 18.921 14.4107C19.141 13.305 19.0281 12.1589 18.5967 11.1174C18.1653 10.0758 17.4347 9.18559 16.4973 8.55927C15.56 7.93295 14.4579 7.59865 13.3306 7.59865H8.90257L10.3666 9.06265C10.5255 9.23326 10.6121 9.45891 10.608 9.69207C10.6039 9.92523 10.5094 10.1477 10.3445 10.3126C10.1796 10.4775 9.95715 10.5719 9.72399 10.5761C9.49083 10.5802 9.26518 10.4936 9.09457 10.3346L6.09457 7.33465C5.92603 7.1659 5.83136 6.93715 5.83136 6.69865C5.83136 6.46015 5.92603 6.2314 6.09457 6.06265L9.09457 3.06265C9.26332 2.89411 9.49207 2.79944 9.73057 2.79944C9.96907 2.79944 10.1978 2.89411 10.3666 3.06265Z"
        fill="#303441"
      />
    </svg>
  );
};

export default ReturnIcon;