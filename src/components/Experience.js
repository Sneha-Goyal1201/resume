import React, { useState } from "react";

function Experience({ experience, setExperience }) {
  const [input, setInput] = useState({
    company: "",
    position: "",
    years: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const addExperience = () => {
    setExperience([...experience, input]);
    setInput({
      company: "",
      position: "",
      years: "",
    });
  };

  return (
    <div>
      <h2>Experience</h2>
      <form>
        <input
          type="text"
          name="company"
          value={input.company}
          placeholder="Company"
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          value={input.position}
          placeholder="Position"
          onChange={handleChange}
        />
        <input
          type="text"
          name="years"
          value={input.years}
          placeholder="Years"
          onChange={handleChange}
        />
        <button type="button" onClick={addExperience}>
          Add Experience
        </button>
      </form>
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

export default Experience;
