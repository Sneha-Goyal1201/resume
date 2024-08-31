import React, { useState } from "react";
import './App.css';
import PersonalInfo from "./components/PersonalInfo.js";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";


function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience} />
      <Preview personalInfo={personalInfo} education={education} experience={experience} />
    </div>
  );
}

export default App;
