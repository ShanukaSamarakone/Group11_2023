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
      setShowForm(false); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openCVGenerator = (template) => {
    setSelectedTemplate(template); 
    if (showForm && selectedTemplate === template) {
      setShowForm(false); 
    } else {
      setShowForm(true); 
      const formSection = document.getElementById('form-section'); 
      formSection.scrollIntoView({ behavior: 'smooth' }); 
    }
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
        
      <div className="cv-container"style={{ display: "flex", justifyContent: "center", paddingTop: "0px", paddingBottom: "150px", marginTop: "-70px", marginBottom: "-120px"}}>
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

      <section id="form-section" className="form-section" style={{ marginTop: "30px", padding: "20px", marginBottom: "-60px" }}>
  {showForm && (
    <div className="cv-form" style={{ marginTop: "150px", marginBottom: "0px", textAlign: "center", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px", border: "3px solid black", borderRadius: "10px", padding: "30px", backgroundImage: "url('assets/images/background.jpeg')", backgroundSize: "cover" }}>
      <h2 style={{ gridColumn: "1 / span 2" }}>CV Form</h2>
      <form onSubmit={handleSubmit} style={{ gridColumn: "1 / span 2" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px" }}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="dob">DOB:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px" }}>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="skills">Skills:</label>
            <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} required />
          </div>
        </div>
        <div style={{ marginBottom: "15px", gridColumn: "1 / span 2" }}>
          <label htmlFor="experience">Experience:</label>
          <input type="text" id="experience" name="experience" value={formData.experience} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ gridColumn: "1 / span 2" }}>Generate</button>
      </form>
  </div>
)}
</section>
      </section>

      <footer style={{ backgroundColor: 'var(--black)', color: 'var(--white)', padding: '25px', textAlign: 'center', borderTop: '1px solid var(--green)' }}>
        <p>&copy; 2024 Quaurus. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

export default CV;