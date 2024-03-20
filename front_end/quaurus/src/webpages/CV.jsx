import React, { useState } from "react";
import axios from "axios";

function CV() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    skills: "",
    experience: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/cv/addCV", formData);
      console.log("CV data saved successfully:", response.data);
      // Optionally reset the form after successful submission
      setFormData({
        name: "",
        dob: "",
        address: "",
        skills: "",
        experience: ""
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <section id="subjects" className="subjects">
        {/* Your existing code for flashcards */}
      </section>

      {/* Form for CV data */}
      <section id="cv-form" className="cv-form">
        <h2>CV Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          <label htmlFor="dob">DOB:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          <label htmlFor="skills">Skills:</label>
          <textarea id="skills" name="skills" rows="4" cols="50" value={formData.skills} onChange={handleChange} required></textarea>
          <label htmlFor="experience">Experience:</label>
          <textarea id="experience" name="experience" rows="4" cols="50" value={formData.experience} onChange={handleChange} required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default CV;