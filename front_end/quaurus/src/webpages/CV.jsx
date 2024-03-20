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
  const [showForm, setShowForm] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/cv/addCV", formData);
      console.log("CV data saved successfully:", response.data);
      setFormData({
        name: "",
        dob: "",
        address: "",
        skills: "",
        experience: ""
      });
      setShowForm(false); // Hide the form after submission
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openCVGenerator = (template) => {
    setShowForm(true);
    setSelectedTemplate(template);
  };

  return (
    <div>
      <section className="home" id="home">
        <h3>Let's Create A</h3>
        <h3><span>CV</span></h3>
      </section>
      <div>
      <section className="selection">
        <div className="heading">
          <h3>Pick Your CV</h3>
        </div>
        
      <div className="cv-container"style={{ display: "flex", justifyContent: "center", paddingTop: "0px", paddingBottom: "110px", marginTop: "-60px" }}>
        <div className="cv" onDoubleClick={() => openCVGenerator("template1")}>
          <div className="cv-face cvs-face">
            <div className="cv-content">
              <img src="assets/images/CV1.jpg" alt="CV Template 1" />
            </div>
          </div>
        </div>
        
        <div className="cv" onDoubleClick={() => openCVGenerator("template1")}>
          <div className="cv-face cvs-face">
            <div className="cv-content">
              <img src="assets/images/CV2.jpg" alt="CV Template 2" />
            </div>
          </div>
        </div>

        <div className="cv" onDoubleClick={() => openCVGenerator("template1")}>
          <div className="cv-face cvs-face">
            <div className="cv-content">
              <img src="assets/images/CV3.jpg" alt="CV Template 3" />
            </div>
          </div>
        </div>

        <div className="cv" onDoubleClick={() => openCVGenerator("template1")}>
          <div className="cv-face cvs-face">
            <div className="cv-content">
              <img src="assets/images/CV4.jpg" alt="CV Template 4" />
            </div>
          </div>
        </div>

        <div className="cv" onDoubleClick={() => openCVGenerator("template1")}>
          <div className="cv-face cvs-face">
            <div className="cv-content">
              <img src="assets/images/CV5.jpg" alt="CV Template 5" />
            </div>
          </div>
        </div>

        <div className="cv" onDoubleClick={() => openCVGenerator("template1")}>
          <div className="cv-face cvs-face">
            <div className="cv-content">
              <img src="assets/images/CV6.jpg" alt="CV Template 6" />
            </div>
          </div>
        </div>

        <div className="cv" onDoubleClick={() => openCVGenerator("template1")}>
          <div className="cv-face cvs-face">
            <div className="cv-content">
              <img src="assets/images/CV7.jpg" alt="CV Template 7" />
            </div>
          </div>
        </div>

        <div className="cv" onDoubleClick={() => openCVGenerator("template1")}>
          <div className="cv-face cvs-face">
            <div className="cv-content">
              <img src="assets/images/CV8.jpg" alt="CV Template 8" />
            </div>
          </div>
        </div>

        <div className="cv" onDoubleClick={() => openCVGenerator("template1")}>
          <div className="cv-face cvs-face">
            <div className="cv-content">
              <img src="assets/images/CV9.jpg" alt="CV Template 9" />
            </div>
          </div>
        </div>
      </div>

      {showForm && (
      <div className="cv-form">
        <h2>CV Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          <label htmlFor="dob">DOB:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required /><div></div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
         
          <label htmlFor="skills">Skills:</label>
          <div className="text-area">
            <textarea id="skills" name="skills" rows="2" cols="50" value={formData.skills} onChange={handleChange} required></textarea>
          </div>
          
          <label htmlFor="experience">Experience:</label>
          <div className="text-area">
            <textarea id="experience" name="experience" rows="2" cols="50" value={formData.experience} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )}
      </section>

      <footer style={{ backgroundColor: 'var(--black)', color: 'var(--white)', padding: '20px', textAlign: 'center', borderTop: '1px solid var(--green)' }}>
        <p>&copy; 2024 Quaurus. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

export default CV;

