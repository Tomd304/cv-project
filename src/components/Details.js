import { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="input-form">
        <h2 className="form-header">Personal Details</h2>
        <div className="label-group">
          <label>First Name</label>
          <input placeholder="John" />
        </div>
        <div className="label-group">
          <label>Last Name</label>
          <input placeholder="Doe" />
        </div>
        <div className="label-group">
          <label>Email</label>
          <input placeholder="john@gmail.com" />
        </div>
        <div className="label-group">
          <label>Phone Number</label>
          <input placeholder="+44 7846589523" />
        </div>
        <button type="button">Submit</button>
      </form>
    );
  }
}

export { Details };
