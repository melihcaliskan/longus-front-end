import * as React from "react";

function SvgCalculator(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 1H6a2 2 0 00-2 2v18a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2zM6 7V3h12v4H6zm0 2v12h12V9H6zm4 10H8v-2h2v2zm1 0h2v-2h-2v2zm5 0h-2v-5h2v5zm-8-3h2v-2H8v2zm5 0h-2v-2h2v2zm-3-3H8v-2h2v2zm1 0h2v-2h-2v2zm5 0h-2v-2h2v2z"
        fill="#000000"
      />
    </svg>
  );
}

export default SvgCalculator;
