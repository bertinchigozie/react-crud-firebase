import React from "react";
import "./Error.css";

function Error(props) {
  return (
    <div
      className="error"
      style={
        props.show ? { display: "block", transform: "translateY(0)" } : null
      }
    >
      <p onClick={props.clicked}>{props.errorText}</p>
    </div>
  );
}

export default Error;
