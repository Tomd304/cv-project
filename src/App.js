import { Component } from "react";
import { Navbar } from "./components/Navbar";
import { Details } from "./components/Details";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Details />
        <Education />
      </div>
    );
  }
}

export default App;
