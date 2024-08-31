import React from "react";

function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <input
          type="text"
          name="name"
          value={personalInfo.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={personalInfo.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          value={personalInfo.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
        <textarea
          name="summary"
          value={personalInfo.summary}
          placeholder="Summary"
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
}

export default PersonalInfo;
