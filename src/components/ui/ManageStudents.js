import React from "react";
import "./ManageStudents.css";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

function ManageStudents(props) {
  return (
    <div className="manage">
      <div className="container">
        <div className="form-header">
          <div>Manage Student</div>
          <div className="form-date-box">
            <div>25th Jul 2022</div>
            <div>16:10</div>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="table-header">
          <div className="table-name">
            <p>Name</p>
          </div>
          <div className="table-class">
            <p>Class</p>
          </div>
          <div className="table-roll">
            <p>Roll No.</p>
          </div>
          <div className="table-view">
            <p>View / Edit / Delete</p>
          </div>
        </div>
        <div className="table-box">
          {props.students.map((student) => (
            <div className="table-body" key={student.id}>
              <div>
                <p>
                  {student.FirstName} {student.LastName}
                </p>
              </div>
              <div>
                <p>{student.Division}</p>
              </div>
              <div>
                <p>{student.RollNumber}</p>
              </div>
              <div className="icons">
                <AiOutlineEye
                  onClick={() => {
                    props.clicked(student.id);
                  }}
                />{" "}
                <BiEditAlt />{" "}
                <RiDeleteBin5Line onClick={() => props.delete(student.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageStudents;
