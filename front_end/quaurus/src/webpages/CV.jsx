import React from "react";
import axios from "axios";

function CV() {
  function generateCV(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/cv/addCV", {
        name: e.target.name.value,
        dob: e.target.dob.value,
        address: e.target.address.value,
        skills: e.target.skills.value,
        experience: e.target.experience.value
      });
      console.log("CV successfully submitted:", response.data);
      e.target.reset();
    } catch (error) {
      console.error("Error submitting CV:", error);
    }
  }

  const openCVGenerator = () => {
    var popupWidth = 900;
    var popupHeight = 700; 
    var left = (window.screen.width - popupWidth) / 2;
    var top = (window.screen.height - popupHeight) / 2;
    var options =
      "width=" + popupWidth + ",height=" + popupHeight + ",left=" + left + ",top=" + top;
    var popupWindow = window.open("", "_blank", options);
    popupWindow.document.write(`
        <html>
        <head>
            <title>CV Generator</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-image: url('assets/images/background.jpeg');
                    background-size: cover;
                    background-position: center;
                }
                .container {
                    width: 90%;
                    height: 75%;
                    max-width: 700px;
                    background-color: rgba(255, 255, 255, 0.9);
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                }
  
                h2 {
                    font-size: 2.2rem;
                    color: #00e77f;
                }
  
                form {
                    width: 100%;
                }
  
                form label,
                form input,
                form textarea {
                    margin-bottom: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2><center>Let's Begin</center></h2>
                <form id="cvForm" onsubmit="generateCV(event)" onSubmit={handleSubmit}>
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name" required /><br>
                    <label for="dob">DOB:</label><br>
                    <input type="date" id="dob" name="dob" required /><br>
                    <label for="address">Address:</label><br>
                    <input type="text" id="address" name="address" required /><br>
                    <label for="skills">Skills:</label><br>
                    <textarea id="skills" name="skills" rows="4" cols="50" required></textarea><br>
                    <label for="experience">Experience:</label><br>
                    <textarea id="experience" name="experience" rows="4" cols="50" required></textarea><br><br>
                    <input type="submit" value="Generate" />
                </form>
                <div id="cvOutput"></div>
            </div>
        </body>
        </html>
    `);
  };

  return (
    <div>
      <section className="home" id="home">
        <h3>Let's Create A</h3>
        <h3>
          <span>CV</span>
        </h3>
      </section>

      <section className="selection">
        <div className="heading">
          <h3>Pick Your CV</h3>

          <div className="cv-container">
            <div className="cv" onDoubleClick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV1.jpg" alt="CV Template 1" />
                </div>
              </div>
            </div>

            <div className="cv" onDoubleClick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV2.jpg" alt="CV Template 2" />
                </div>
              </div>
            </div>

            <div className="cv" onDoubleClick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV3.jpg" alt="CV Template 3" />
                </div>
              </div>
            </div>

            <div className="cv" onDoubleClick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV4.jpg" alt="CV Template 4" />
                </div>
              </div>
            </div>

            <div className="cv" onDoubleClick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV5.jpg" alt="CV Template 5" />
                </div>
              </div>
            </div>

            <div className="cv" onDoubleClick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV6.jpg" alt="CV Template 6" />
                </div>
              </div>
            </div>

            <div className="cv" onDoubleClick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV7.jpg" alt="CV Template 7" />
                </div>
              </div>
            </div>

            <div className="cv" onDoubleClick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV8.jpg" alt="CV Template 8" />
                </div>
              </div>
            </div>

            <div className="cv" onDoubleClick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV9.jpg" alt="CV Template 9" />
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>

      <footer style={{ backgroundColor: 'var(--black)', color: 'var(--white)', padding: '20px', textAlign: 'center', borderTop: '1px solid var(--green)' }}>
        <p>&copy; 2024 Quaurus. All rights reserved.</p>
</footer>

    </div>
  );
}
export default CV;