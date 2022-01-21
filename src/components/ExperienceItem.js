import { Component } from "react";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      companyName: "Big Company Incorporated",
      positionTitle: "Account Manager",
      startDate: "2021-06-01",
      endDate: "2022-01-15",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    this.submitClick = this.submitClick.bind(this);
    this.editClick = this.editClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitClick() {
    this.setState({
      editMode: false,
    });
  }

  editClick() {
    this.setState({
      editMode: true,
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
        <div className="component-form" style={{ margin: "auto" }}>
          <div className="row">
            <h2 className="form-header">Experience</h2>
            <button type="button" onClick={this.props.addClick}>
              Add
            </button>
          </div>
          <form className="input-form">
            <div className="label-group">
              <label>Company Name</label>
              <input
                name="companyName"
                value={this.state.companyName}
                onChange={this.handleChange}
                placeholder="Company Name"
              />
            </div>
            <div className="label-group">
              <label>Title of Position"</label>
              <input
                name="positionTitle"
                value={this.state.positionTitle}
                onChange={this.handleChange}
                placeholder="Account Manager"
              />
            </div>

            <div className="label-group">
              <label>Start Date</label>
              <input
                name="startDate"
                value={this.state.startDate}
                onChange={this.handleChange}
                type="date"
              />
            </div>
            <div className="label-group">
              <label>End Date</label>
              <input
                name="endDate"
                value={this.state.endDate}
                onChange={this.handleChange}
                type="date"
              />
            </div>
            <div className="label-group">
              <label>Job Description</label>
              <textarea
                name="jobDescription"
                value={this.state.jobDescription}
                style={{ height: 140, fontSize: 18 }}
                onChange={this.handleChange}
                placeholder="Description of Job responsibilities / tasks"
              />
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
        <div className="cv-section">
          <button
            className="overlay-btn"
            onClick={this.editClick}
            style={{ alignSelf: "flex-end" }}
          >
            Edit
          </button>
          {this.props.identifier == 0 && (
            <h1 style={{ fontSize: 36, paddingTop: 30 }}>Experience</h1>
          )}
          <h2 style={{ marginTop: 8 }}>
            {this.state.companyName} - {this.state.positionTitle} (
            {this.state.startDate.slice(0, 4)}-{this.state.endDate.slice(0, 4)})
          </h2>
          <p>{this.state.jobDescription}</p>
        </div>
      );
    }
  }
}

export { ExperienceItem };
