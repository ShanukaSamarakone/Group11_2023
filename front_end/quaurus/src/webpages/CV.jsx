import React from "react";

function CV() {
    const openPopup = (imageUrl) => {
        const width = 1050;
        const height = 650;
        const left = (window.screen.width / 2) - (width / 2);
        const top = (window.screen.height / 2) - (height / 2);
        window.open(imageUrl, '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
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
            <div className="cv" onClick={() => openPopup('assets/images/CV1.jpg')}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV1.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" onClick={() => openPopup('assets/images/CV2.jpg')}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV2.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" onClick={() => openPopup('assets/images/CV3.jpg')}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV3.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" onClick={() => openPopup('assets/images/CV4.jpg')}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV4.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" onClick={() => openPopup('assets/images/CV5.jpg')}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV5.jpg" />
                </div>
              </div>
              |
            </div>

            <div className="cv" onClick={() => openPopup('assets/images/CV6.jpg')}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV6.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" onClick={() => openPopup('assets/images/CV7.jpg')}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV7.jpg" />
                </div>
              </div>
            </div>

            <div className="cv" onClick={() => openPopup('assets/images/CV8.jpg')}>
              <div className="cv-face cvs-face">
                <div className="cv-content">
                  <img src="assets/images/CV8.jpg" />
                </div>
              </div>
              |
            </div>

            <div className="cv" onClick={() => openPopup('assets/images/CV9.jpg')}>
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
