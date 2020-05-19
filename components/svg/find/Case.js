import * as React from "react";

function SvgCase(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3h4a2 2 0 012 2v1h4a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V5a2 2 0 012-2zM4 8h16v5H4V8zm0 11v-4h7v1h2v-1h7v4H4zM14 5v1h-4V5h4z"
        fill="#000000"
      />
    </svg>
  );
}

export default SvgCase;
