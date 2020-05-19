import * as React from "react";

function SvgDelivery(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.382 7l1.842 3.685L21 12.535V16h-1.17a3.001 3.001 0 00-5.66 0H9.83a3.001 3.001 0 00-5.66 0H3V7h13.382zM21 18h-1.17a3.001 3.001 0 01-5.66 0H9.83a3.001 3.001 0 01-5.66 0H3a2 2 0 01-2-2V7a2 2 0 012-2h13.382a2 2 0 011.789 1.106l1.605 3.21L23 11.464V16a2 2 0 01-2 2zM8 17a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z"
        fill="#000000"
      />
    </svg>
  );
}

export default SvgDelivery;
