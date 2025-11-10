import React from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="cv-container">
      <h1 className="cv-title">My CV</h1>

      <section className="objective">
        <h2>Objective</h2>
        <p>
          To obtain a challenging position in a reputable organization where I
          can utilize my skills in software development and contribute to
          innovative projects.
        </p>
      </section>

      <PersonalInfo />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
