import { useState } from "react";

const EducationItem = (props) => {
  const [details, setDetails] = useState({
    editMode: true,
    schoolName: "Didsburry High",
    studyTitle: "BEng Aquamarine Science",
    startDate: "2018-06-15",
    endDate: "2021-06-15",
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
          <h2 className="form-header">Education</h2>
          <button type="button" onClick={props.addClick}>
            Add
          </button>
        </div>
        <form className="input-form">
          <div className="label-group">
            <label>School Name</label>
            <input
              name="schoolName"
              value={details.schoolName}
              onChange={handleChange}
              placeholder="School Name"
            />
          </div>
          <div className="label-group">
            <label>Title of Study</label>
            <input
              name="studyTitle"
              value={details.studyTitle}
              onChange={handleChange}
              placeholder="Title of Study"
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
          <h1 style={{ fontSize: 36, paddingTop: 30 }}>Education</h1>
        )}
        <h2 style={{ marginTop: 8 }}>
          {details.schoolName} - {details.studyTitle} (
          {details.startDate.slice(0, 4)} - {details.endDate.slice(0, 4)})
        </h2>
      </div>
    );
  }
};

export { EducationItem };
