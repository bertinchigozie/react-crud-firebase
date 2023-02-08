import React from "react";
import "./ViewStudent.css";
function ViewStudents(props) {
  return (
    <div
      onClick={props.close}
      className="modal"
      style={
        props.show
          ? {
              transform: "translateY(0)",
              opacity: "1",
              transition: "all 0.2s ease-out",
            }
          : null
      }
    >
      <div className="view">
        <div className="nam">
          <p>
            <span>Name:</span> {props.data.FirstName} {props.data.MiddleName}{" "}
            {props.data.LastName}
          </p>
        </div>
        <div className="div">
          <p>
            <span>Class:</span> {props.data.Class}
          </p>
          <p>
            <span>Division:</span> {props.data.Division}
          </p>
          <p>
            <span>Pincode:</span> {props.data.Pincode}
          </p>
          <p>
            <span>Roll Number:</span> {props.data.RollNumber}
          </p>
        </div>
        <div>
          <p>
            <span>Address:</span> {props.data.Address1}, <br />
            {props.data.Address2}{" "}
          </p>
        </div>
        <div className="land">
          <p>
            <span>Landmark:</span> {props.data.Landmark}
          </p>
          <p>
            <span>City:</span> {props.data.City}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewStudents;
