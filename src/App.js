import { Component } from "react";
import { Navbar } from "./components/Navbar";
import { Details } from "./components/Details";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Details />
      <Education />
      <Experience />
      <div className="foot" />
    </div>
  );
};

export default App;
