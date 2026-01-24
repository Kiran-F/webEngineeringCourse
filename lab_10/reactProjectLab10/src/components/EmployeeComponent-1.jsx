import React, { useState } from "react";

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    age: "",
    subject: "",
    address: "",
  });

  const validateForm = () => {
    let valid = true;
    const copy = { ...errors };

    if (!firstName.trim()) {
      copy.firstName = "First Name is required";
      valid = false;
    } else copy.firstName = "";

    if (!lastName.trim()) {
      copy.lastName = "Last Name is required";
      valid = false;
    } else copy.lastName = "";

    if (!age.trim()) {
      copy.age = "Age is required";
      valid = false;
    } else copy.age = "";

     if(age > 30 || age < 18){
        copy.age = "The age must be between 18 and 30";
        valid = false;
      }

    if (!subject.trim()) {
      copy.subject = "Please select a subject";
      valid = false;
    } else copy.subject = "";

    if (!address.trim()) {
      copy.address = "Address is required";
      valid = false;
    } else copy.address = "";

    setErrors(copy);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const studentData = { firstName, lastName, age, subject, address };
      console.log("Student Data:", studentData);
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="container">
      <div 
        className="card p-4 shadow"
        style={{
          width: "550px",
          margin: "0 auto",
          borderRadius: "10px"
        }}
      >
        <h3 className="text-center mb-4">Student Form</h3>

        <form className="text-start">
          {/* First Name */}
          <div className="form-group mb-3">
            <label className="form-label">First Name :</label>
            <input
              type="text"
              placeholder="Enter first name"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
          </div>

          {/* Last Name */}
          <div className="form-group mb-3">
            <label className="form-label">Last Name :</label>
            <input
              type="text"
              placeholder="Enter last name"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
          </div>

          {/* Age */}
          <div className="form-group mb-3">
            <label className="form-label">Age :</label>
            <input
              type="number"
              placeholder="Enter age"
              className={`form-control ${errors.age ? "is-invalid" : ""}`}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            {errors.age && <div className="invalid-feedback">{errors.age}</div>}
          </div>

          {/* Subjects */}
          <div className="form-group mb-3">
            <label className="form-label">Subjects : Select an option:</label>

            <select
              className={`form-control ${errors.subject ? "is-invalid" : ""}`}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">-- Select Subject --</option>
              <option value="OOP">OOP</option>
              <option value="DSA">DSA</option>
              <option value="AI">AI</option>
              <option value="DBMS">DBMS</option>
            </select>

            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
          </div>

          {subject && <p>Selected subjects: {subject}</p>}

          {/* Address */}
          <div className="form-group mb-3">
            <label className="form-label">Address :</label>
            <textarea
              rows="4"
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>

          <button className="btn btn-success w-100 mt-2" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeComponent;
