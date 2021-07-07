import React from "react";

const SpecialButton = (props) => {
  return (
    <button className = "button-spec-">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.specialValue}
    </button>
  );
};

export default SpecialButton;