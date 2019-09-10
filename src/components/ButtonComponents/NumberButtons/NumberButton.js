import React from "react";

export const NumberButton = props => {
  return (
    <button className = {'button-num-' + props.numberValue}>{props.numberValue}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
