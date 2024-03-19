import React from "react";
  
function CV(){   
  const openCVGenerator=()=> { 
  
  var popupWidth = 900; // Adjust as needed
  var popupHeight = 700; // Adjust as needed
  var left = (window.screen.width - popupWidth) / 2;
  var top = (window.screen.height - popupHeight) / 2;
  var options = "width=" + popupWidth + ",height=" + popupHeight + ",left=" + left + ",top=" + top;
  var popupWindow = window.open("", "_blank", options);
  popupWindow.document.write(`
  `);
  }
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
            <div className="cv" ondbclick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV1.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" ondbclick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV2.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" ondbclick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV3.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" ondbclick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV4.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" ondbclick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV5.jpg" />
                </div>
              </div>
              |
            </div>

            <div className="cv" ondbclick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV6.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" ondbclick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV7.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" ondbclick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV8.jpg" />
                </div>
              </div>
              |
            </div>

            <div className="cv" ondbclick={() => openCVGenerator()}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV9.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Quaurus. All rights reserved.</p>
      </footer>
    </div>
  );
  }

export default CV;
