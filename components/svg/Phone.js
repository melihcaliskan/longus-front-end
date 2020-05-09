import * as React from "react";

function Phone(props) {
  return (
    <svg width={76} height={76} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.833 3.167H22.167A6.333 6.333 0 0015.833 9.5v57a6.333 6.333 0 006.334 6.333h31.666a6.333 6.333 0 006.334-6.333v-57a6.333 6.333 0 00-6.334-6.333zM22.167 9.5h9.5a3.167 3.167 0 003.166 3.167h6.334A3.167 3.167 0 0044.333 9.5h9.5v57H22.167v-57z"
        fill="#000"
      />
    </svg>
  );
}

export default Phone;
