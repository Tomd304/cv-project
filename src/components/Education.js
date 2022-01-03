import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="input-form">
        <div className="row">
          <h2 className="form-header">Education</h2>
          <button type="button">Add</button>
        </div>
        <div className="label-group">
          <label>First Name</label>
          <input placeholder="School Name" />
        </div>
        <div className="label-group">
          <label>First Name</label>
          <input placeholder="Title of Study" />
        </div>

        <div className="label-group">
          <label>Start Date</label>
          <input type="date" />
        </div>
        <div className="label-group">
          <label>End Date</label>
          <input type="date" />
        </div>
        <button type="button">Submit</button>
      </form>
    );
  }
}

export { Education };
