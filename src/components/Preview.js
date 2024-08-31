import React from "react";

function Preview({ personalInfo, education, experience }) {
  return (
    <div id="resume">
      <h2>Resume Preview</h2>
      <h3>{personalInfo.name}</h3>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>
      <p>{personalInfo.summary}</p>

      <h4>Education</h4>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.school} - {edu.degree} ({edu.year})
          </li>
        ))}
      </ul>

      <h4>Experience</h4>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            {exp.company} - {exp.position} ({exp.years})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preview;
