import React, { useState } from 'react';
import axios from 'axios';

function CV() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    skills: '',
    experience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:8080/cv/addCV', formData);
      console.log('CV data submitted successfully');
      // Optionally reset the form
      setFormData({
        name: '',
        dob: '',
        address: '',
        skills: '',
        experience: ''
      });
    } catch (error) {
      console.error('Error submitting CV data:', error);
    }
  };

  return (
    <div className="container">
      <h2><center>Let's Begin</center></h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
        <label htmlFor="dob">DOB:</label><br />
        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required /><br />
        <label htmlFor="address">Address:</label><br />
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required /><br />
        <label htmlFor="skills">Skills:</label><br />
        <textarea id="skills" name="skills" rows="4" cols="50" value={formData.skills} onChange={handleChange} required></textarea><br />
        <label htmlFor="experience">Experience:</label><br />
        <textarea id="experience" name="experience" rows="4" cols="50" value={formData.experience} onChange={handleChange} required></textarea><br /><br />
        <input type="submit" value="Generate" />
      </form>
      <div id="cvOutput"></div>
    </div>
  );
}

export default CV;
