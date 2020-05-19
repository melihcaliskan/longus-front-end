import * as React from "react";

function SvgMonitor(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 19v1H7v2h10v-2h-2v-1h6a2 2 0 002-2V4a2 2 0 00-2-2H3a2 2 0 00-2 2v13a2 2 0 002 2h6zm12-2H3V4h18v13z"
        fill="#000000"
      />
    </svg>
  );
}

export default SvgMonitor;
