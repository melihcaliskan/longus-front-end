import * as React from "react";

function SvgMemoryCard(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 1H8.586L3 6.586V21a2 2 0 002 2h14a2 2 0 002-2V3a2 2 0 00-2-2zM5 21V7.414L9.414 3H19v18H5zM16 4h2v6h-2V4zm-1 0h-2v6h2V4zm-5 0h2v6h-2V4zM9 7H7v4h2V7z"
        fill="#000000"
      />
    </svg>
  );
}

export default SvgMemoryCard;
