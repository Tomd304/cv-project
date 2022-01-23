import { useState } from "react";

const ExperienceItem = (props) => {
  const [details, setDetails] = useState({
    editMode: true,
    companyName: "Big Company Incorporated",
    positionTitle: "Account Manager",
    startDate: "2021-06-01",
    endDate: "2022-01-15",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

  if (details.editMode) {
    return (
      <div className="component-form" style={{ margin: "auto" }}>
        <div className="row">
          <h2 className="form-header">Experience</h2>
          <button type="button" onClick={props.addClick}>
            Add
          </button>
        </div>
        <form className="input-form">
          <div className="label-group">
            <label>Company Name</label>
            <input
              name="companyName"
              value={details.companyName}
              onChange={handleChange}
              placeholder="Company Name"
            />
          </div>
          <div className="label-group">
            <label>Title of Position"</label>
            <input
              name="positionTitle"
              value={details.positionTitle}
              onChange={handleChange}
              placeholder="Account Manager"
            />
          </div>

          <div className="label-group">
            <label>Start Date</label>
            <input
              name="startDate"
              value={details.startDate}
              onChange={handleChange}
              type="date"
            />
          </div>
          <div className="label-group">
            <label>End Date</label>
            <input
              name="endDate"
              value={details.endDate}
              onChange={handleChange}
              type="date"
            />
          </div>
          <div className="label-group">
            <label>Job Description</label>
            <textarea
              name="jobDescription"
              value={details.jobDescription}
              style={{ height: 140, fontSize: 18 }}
              onChange={handleChange}
              placeholder="Description of Job responsibilities / tasks"
            />
          </div>
          {props.id != 0 && (
            <div className="row">
              <button
                type="button"
                onClick={props.removeSelf}
                data-id={props.id}
              >
                Remove
              </button>
              <button type="button" onClick={submitClick}>
                Submit
              </button>
            </div>
          )}
          {props.id == 0 && (
            <button type="button" onClick={submitClick}>
              Submit
            </button>
          )}
        </form>
      </div>
    );
  } else {
    return (
      <div className="cv-section">
        <button
          className="overlay-btn"
          onClick={editClick}
          style={{ alignSelf: "flex-end" }}
        >
          Edit
        </button>
        {props.id == 0 && (
          <h1 style={{ fontSize: 36, paddingTop: 30 }}>Experience</h1>
        )}
        <h2 style={{ marginTop: 8 }}>
          {details.companyName} - {details.positionTitle} (
          {details.startDate.slice(0, 4)}-{details.endDate.slice(0, 4)})
        </h2>
        <p style={{ textAlign: "justify", paddingRight: 40 }}>
          {details.jobDescription}
        </p>
      </div>
    );
  }
};

export { ExperienceItem };
