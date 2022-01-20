import { Component } from "react";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
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
          {this.props.identifier == 0 && <h1>Experience</h1>}
          <h2>{this.state.companyName}</h2>
          <h2>{this.state.positionTitle}</h2>
          <h2>
            {this.state.startDate}-{this.state.endDate}
          </h2>
        </div>
      );
    }
  }
}

export { ExperienceItem };
