import React from "react";

const OperatorButton = (props) => {
  return (
    <button className= "button-ops-">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operatorLabel}
    </button>
  );
};

export default OperatorButton;