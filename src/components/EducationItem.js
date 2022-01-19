import { Component } from "react";

class EducationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      schoolName: "",
      studyTitle: "",
      startDate: "",
      endDate: "",
    };
    this.submitClick = this.submitClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitClick() {
    this.setState({
      editMode: false,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    if (this.state.editMode) {
      return (
        <div className="component-form">
          <div className="row">
            <h2 className="form-header">Education</h2>
            <button type="button" onClick={this.props.addClick}>
              Add
            </button>
          </div>
          <form className="input-form">
            <div className="label-group">
              <label>School Name</label>
              <input
                name="schoolName"
                onChange={this.handleChange}
                placeholder="School Name"
              />
            </div>
            <div className="label-group">
              <label>Title of Study</label>
              <input
                name="studyTitle"
                onChange={this.handleChange}
                placeholder="Title of Study"
              />
            </div>

            <div className="label-group">
              <label>Start Date</label>
              <input
                name="startDate"
                onChange={this.handleChange}
                type="date"
              />
            </div>
            <div className="label-group">
              <label>End Date</label>
              <input name="endDate" onChange={this.handleChange} type="date" />
            </div>
            {this.props.identifier != 0 && (
              <div className="row">
                <button
                  type="button"
                  onClick={this.props.removeSelf}
                  data-identifier={this.props.identifier}
                >
                  Remove
                </button>
                <button type="button" onClick={this.submitClick}>
                  Submit
                </button>
              </div>
            )}
            {this.props.identifier == 0 && (
              <button type="button" onClick={this.submitClick}>
                Submit
              </button>
            )}
          </form>
        </div>
      );
    } else {
      return (
        <div className="cv-education-section">
          <div className="cv-education">
            <h2>{this.state.schoolName}</h2>
            <h2>{this.state.studyTitle}</h2>
            <h2>
              {this.state.startDate}-{this.state.endDate}
            </h2>
          </div>
        </div>
      );
    }
  }
}

export { EducationItem };
