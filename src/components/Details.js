import { useState } from "react";

const Details = () => {
  const [details, setDetails] = useState({
    editMode: true,
    firstName: "John",
    lastName: "Doe",
    email: "jonnyD@gmail.com",
    phoneNumber: "+44 7854689523",
  });

  const submitClick = () => {
    setDetails({ ...details, editMode: false });
  };

  const editClick = () => {
    setDetails({ ...details, editMode: true });
  };

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  console.log(details);
  if (details.editMode) {
    return (
      <div className="component-form">
        <form className="input-form">
          <h2 className="form-header">Personal Details</h2>
          <div className="label-group">
            <label>First Name</label>
            <input
              name="firstName"
              placeholder="John"
              value={details.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="label-group">
            <label>Last Name</label>
            <input
              name="lastName"
              placeholder="Doe"
              value={details.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="label-group">
            <label>Email</label>
            <input
              name="email"
              placeholder="john@gmail.com"
              value={details.email}
              onChange={handleChange}
            />
          </div>
          <div className="label-group">
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              placeholder="+44 7846589523"
              value={details.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={submitClick}>
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="cv-details-section">
        <button
          className="overlay-btn"
          onClick={editClick}
          style={{ alignSelf: "flex-start" }}
        >
          Edit
        </button>

        <h2 style={{ fontSize: 48 }}>
          {details.firstName + " " + details.lastName}
        </h2>
        <h2 style={{ fontSize: 16 }}>email: {details.email}</h2>
        <h2 style={{ fontSize: 16 }}>contact number: {details.phoneNumber}</h2>
      </div>
    );
  }
};

export { Details };
