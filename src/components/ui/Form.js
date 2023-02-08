import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase.config";
import Error from "../pages/Error";

import "./Form.css";

const dataCollection = collection(db, "crud");
function Form() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [secondAddress, setSecondAddress] = useState("");
  const [classentered, setClassEntered] = useState(undefined);
  const [rollNumber, setRollNumber] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [division, setDivision] = useState(undefined);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [showError, setShowError] = useState(false);

  const addHandler = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newStudent = {
        FirstName: firstName,
        MiddleName: middleName,
        LastName: lastName,
        Class: classentered,
        Division: division,
        RollNumber: rollNumber,
        Address1: address,
        Address2: secondAddress,
        Landmark: landmark,
        City: city,
        Pincode: pincode,
      };
      const createStudent = async () => {
        await addDoc(dataCollection, newStudent);
      };

      createStudent();
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setAddress("");
      setSecondAddress("");
      setDivision(undefined);
      setClassEntered(undefined);
      setLandmark("");
      setPincode("");
      setRollNumber("");
      setCity("");
      setErrorText(false);
    }
  };
  const validateForm = () => {
    let isValid = true;
    if (!firstName || !middleName || !lastName) {
      setError(true);
      setShowError(true);
      setErrorText("Please fill all names fields");
      isValid = false;
    }
    if (!address && !secondAddress) {
      setError(true);
      setShowError(true);
      setErrorText("Please provide a Valid address");
      isValid = false;
    }
    if (!division) {
      setError(true);
      setShowError(true);
      setErrorText("Please choose a valid division");
      isValid = false;
    }
    if (!classentered) {
      setError(true);
      setShowError(true);
      setErrorText("Please choose a valid  class");
      isValid = false;
    }
    if (!city) {
      setError(true);
      setShowError(true);
      setErrorText("Please provide a valid city");
      isValid = false;
    }
    if (!pincode || pincode.length < 6 || !Number(pincode)) {
      setError(true);
      setShowError(true);
      setErrorText("Please provide a valid 6 digit pin number");
      isValid = false;
    }
    if (!rollNumber || rollNumber.length < 2 || !Number(rollNumber)) {
      setError(true);
      setShowError(true);
      setErrorText("Please provide a valid 2 digit Roll number");
      isValid = false;
    }
    if (!landmark) {
      setError(true);
      setShowError(true);
      setErrorText("Please provide a landmark");
      isValid = false;
    }
    return isValid;
  };

  const closeErrorMes = () => {
    const closeHandle = !showError;
    setShowError(closeHandle);
  };

  return (
    <div>
      {error && (
        <Error show={showError} errorText={errorText} clicked={closeErrorMes} />
      )}
      <form className="container">
        <div className="form-header">
          <div>Add Student</div>
          <div className="form-date-box">
            <div>25th Jul 2022</div>
            <div>16:10</div>
          </div>
        </div>
        <div className="text-field-box">
          <input
            className="text-field"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            className="text-field"
            type="text"
            placeholder="Middle Name"
            value={middleName}
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />
          <input
            className="text-field"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <select
            className="text-field"
            name="Select Class"
            placeholder="Select Class"
            onChange={(e) => {
              setClassEntered(e.target.value);
            }}
          >
            <option>Select Class</option>
            <option value={classentered}>1</option>
            <option value={classentered}>2</option>
            <option value={classentered}>3</option>
            <option value={classentered}>4</option>
            <option value={classentered}>5</option>
            <option value={classentered}>6</option>
            <option value={classentered}>7</option>
            <option value={classentered}>8</option>
            <option value={classentered}>9</option>
            <option value={classentered}>10</option>
            <option value={classentered}>11</option>
            <option value={classentered}>12</option>
          </select>
          <select
            className="text-field"
            name="Select Dvision"
            onChange={(e) => {
              setDivision(e.target.value);
            }}
          >
            <option>Select Division</option>
            <option value={division}>VI-A</option>
            <option value={division}>VI-B</option>
            <option value={division}>VI-C</option>
            <option value={division}>VI-D</option>
            <option value={division}>VI-E</option>
          </select>
          <input
            className="roll-field"
            type="text"
            placeholder="Enter Roll Number in Digits"
            value={rollNumber}
            maxLength={2}
            onChange={(e) => {
              setRollNumber(e.target.value);
            }}
          />
        </div>
        <div className="address-field-box">
          <textarea
            className="address-field"
            name=""
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder=" Address Line 1"
          />
          <textarea
            className="address-field"
            name=""
            value={secondAddress}
            placeholder=" Address Line 2"
            onChange={(e) => {
              setSecondAddress(e.target.value);
            }}
          />
        </div>
        <div className="text-field-box">
          <input
            className="text-field"
            type="text"
            placeholder="Landmark"
            value={landmark}
            onChange={(e) => {
              setLandmark(e.target.value);
            }}
          />
          <input
            className="text-field"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input
            className="text-field"
            type="text"
            placeholder="Pincode"
            value={pincode}
            maxLength={6}
            onChange={(e) => {
              setPincode(e.target.value);
            }}
          />
        </div>
        <div className="form-btn">
          <div className="btn">
            <button className="button" onClick={addHandler}>
              Add Student
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
