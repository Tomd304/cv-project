import { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar-div">
        <h1 className="navbar-title">CV BUILDER</h1>
      </div>
    );
  }
}

export { Navbar };
