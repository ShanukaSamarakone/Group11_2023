import React from "react";

function Home() {
  return (
    <div>
      <section className="home" id="home">
        <h3>Quality</h3>
        <h3>
          <span>Education</span>
        </h3>
      </section>

      <section className="about">
        <div className="heading">
          <h3>About Us</h3>
        </div>
        <div className="about-container">
          <div className="about-content">
            <div className="about-image">
              <img src="/assets/images/about-img.png" alt="about image" />
            </div>
            <div className="about-text">
              <h2>Our Goal</h2>
              <p>
                Our goal is to provide comprehensive and engaging education in
                both Mathematics and English. We strive to create an interactive
                and supportive learning environment that caters to various
                learning styles. Through a combination of clear explanations,
                practical examples, and interactive exercises, we aspire to
                empower learners with the knowledge and skills essential for
                success in these fundamental subjects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
