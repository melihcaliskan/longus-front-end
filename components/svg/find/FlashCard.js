import * as React from "react";

function SvgFlashCard(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 17h7v2h10a5 5 0 005-5v-4a5 5 0 00-5-5H8v2H1v10zm17 0h-8V7h8a3 3 0 013 3v4a3 3 0 01-3 3zM3 9v6h5V9H3zm4 2H4v2h3v-2z"
        fill="#000000"
      />
    </svg>
  );
}

export default SvgFlashCard;
