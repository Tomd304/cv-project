import { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
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
        <div className="component-form">
          <form className="input-form">
            <h2 className="form-header">Personal Details</h2>
            <div className="label-group">
              <label>First Name</label>
              <input
                name="firstName"
                placeholder="John"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="label-group">
              <label>Last Name</label>
              <input
                name="lastName"
                placeholder="Doe"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className="label-group">
              <label>Email</label>
              <input
                name="email"
                placeholder="john@gmail.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="label-group">
              <label>Phone Number</label>
              <input
                name="phoneNumber"
                placeholder="+44 7846589523"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </div>
            <button type="button" onClick={this.submitClick}>
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
            onClick={this.editClick}
            style={{ alignSelf: "flex-start" }}
          >
            Edit
          </button>

          <h2>{this.state.firstName + " " + this.state.lastName}</h2>
          <h2>{this.state.email}</h2>
          <h2>{this.state.phoneNumber}</h2>
        </div>
      );
    }
  }
}

export { Details };
