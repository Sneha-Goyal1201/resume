import React, { useState } from "react";

function Education({ education, setEducation }) {
  const [input, setInput] = useState({
    school: "",
    degree: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const addEducation = () => {
    setEducation([...education, input]);
    setInput({
      school: "",
      degree: "",
      year: "",
    });
  };

  return (
    <div>
      <h2>Education</h2>
      <form>
        <input
          type="text"
          name="school"
          value={input.school}
          placeholder="School"
          onChange={handleChange}
        />
        <input
          type="text"
          name="degree"
          value={input.degree}
          placeholder="Degree"
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          value={input.year}
          placeholder="Year of Graduation"
          onChange={handleChange}
        />
        <button type="button" onClick={addEducation}>
          Add Education
        </button>
      </form>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.school} - {edu.degree} ({edu.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
