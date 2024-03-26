import React, { useEffect, useState } from "react";
import axios from "axios";

function Flashcard() {
  const [error, setError] = useState(null);

  const [addition, setAdditionFlashcard] = useState([]);

  useEffect(() => {
    loadAdditionFlashcard();
  }, []);

  const loadAdditionFlashcard = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/flashcard/getFlashcard/1"
      );
      setAdditionFlashcard(result.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        console.error(
          "Backend responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Backend error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from the backend. Is it running?");
        setError("Could not connect to the backend. Is it running?");
      } else {
        console.error("Error", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  const [subtraction, setSubtractionFlashcard] = useState([]);

  useEffect(() => {
    loadSubtractionFlashcard();
  }, []);

  const loadSubtractionFlashcard = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/flashcard/getFlashcard/2"
      );
      setSubtractionFlashcard(result.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        console.error(
          "Backend responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Backend error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from the backend. Is it running?");
        setError("Could not connect to the backend. Is it running?");
      } else {
        console.error("Error", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  const [multiplication, setMultiplicationFlashcard] = useState([]);

  useEffect(() => {
    loadMultiplicationFlashcard();
  }, []);

  const loadMultiplicationFlashcard = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/flashcard/getFlashcard/3"
      );
      setMultiplicationFlashcard(result.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        console.error(
          "Backend responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Backend error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from the backend. Is it running?");
        setError("Could not connect to the backend. Is it running?");
      } else {
        console.error("Error", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  const [division, setDivisionFlashcard] = useState([]);

  useEffect(() => {
    loadDivisionFlashcard();
  }, []);

  const loadDivisionFlashcard = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/flashcard/getFlashcard/4"
      );
      setDivisionFlashcard(result.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        console.error(
          "Backend responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Backend error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from the backend. Is it running?");
        setError("Could not connect to the backend. Is it running?");
      } else {
        console.error("Error", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  const [fraction, setFractionFlashcard] = useState([]);

  useEffect(() => {
    loadFractionFlashcard();
  }, []);

  const loadFractionFlashcard = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/flashcard/getFlashcard/5"
      );
      setFractionFlashcard(result.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        console.error(
          "Backend responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Backend error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from the backend. Is it running?");
        setError("Could not connect to the backend. Is it running?");
      } else {
        console.error("Error", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  const [percentage, setPercentageFlashcard] = useState([]);

  useEffect(() => {
    loadPercentageFlashcard();
  }, []);

  const loadPercentageFlashcard = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/flashcard/getFlashcard/6"
      );
      setPercentageFlashcard(result.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        console.error(
          "Backend responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Backend error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from the backend. Is it running?");
        setError("Could not connect to the backend. Is it running?");
      } else {
        console.error("Error", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  const [fullStop, setFullStopFlashcard] = useState([]);

  useEffect(() => {
    loadFullStopFlashcard();
  }, []);

  const loadFullStopFlashcard = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/flashcard/getFlashcard/7"
      );
      setFullStopFlashcard(result.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        console.error(
          "Backend responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Backend error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from the backend. Is it running?");
        setError("Could not connect to the backend. Is it running?");
      } else {
        console.error("Error", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  const [comma, setCommaFlashcard] = useState([]);

  useEffect(() => {
    loadCommaFlashcard();
  }, []);

  const loadCommaFlashcard = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/flashcard/getFlashcard/8"
      );
      setCommaFlashcard(result.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        console.error(
          "Backend responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Backend error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from the backend. Is it running?");
        setError("Could not connect to the backend. Is it running?");
      } else {
        console.error("Error", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  const [questionMark, setQuestionMarkFlashcard] = useState([]);

  useEffect(() => {
    loadQuestionMarkFlashcard();
  }, []);

  const loadQuestionMarkFlashcard = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/flashcard/getFlashcard/9"
      );
      setQuestionMarkFlashcard(result.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        console.error(
          "Backend responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Backend error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from the backend. Is it running?");
        setError("Could not connect to the backend. Is it running?");
      } else {
        console.error("Error", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  const [exclamationMark, setExclamationMarkFlashcard] = useState([]);

  useEffect(() => {
    loadExclamationMarkFlashcard();
  }, []);

  const loadExclamationMarkFlashcard = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/flashcard/getFlashcard/10"
      );
      setExclamationMarkFlashcard(result.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        console.error(
          "Backend responded with an error:",
          error.response.status,
          error.response.data
        );
        setError(`Backend error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received from the backend. Is it running?");
        setError("Could not connect to the backend. Is it running?");
      } else {
        console.error("Error", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  const renderFlashcardsWithSpaces = (text) => {
    const parts = text
      .split(/(?<=[.?!:])\s*/)
      .filter((part) => part)
      .map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < text.length - 1 && <br />}
        </React.Fragment>
      ));
    return parts;
  };

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div>
      <section id="subjects" className="subjects">
        <div className="menu-container">
          <div className="menu-option">
            <div className="menu menu-subject">
              <div className="menu-content">
                <img src="assets/images/mathOwl.png" />
                <h3>Mathematics</h3>
              </div>
            </div>
            <div className="menu menu-link">
              <div className="menu-content">
                <p>Ready to learn ?</p>
                <a href="#maths">Take Me There</a>
              </div>
            </div>
          </div>
          <div className="menu-option">
            <div className="menu menu-subject">
              <div className="menu-content">
                <img src="assets/images/englishOwl.png" />
                <h3>English</h3>
              </div>
            </div>
            <div className="menu menu-link">
              <div className="menu-content">
                <p>Ready to Learn ?</p>
                <a href="#english">Take Me There</a>
              </div>
            </div>
          </div>
          <div className="menu-option">
            <div className="menu menu-subject">
              <div className="menu-content">
                <img src="assets/images/quizOwl.png" />
                <h3>Quiz</h3>
              </div>
            </div>
            <div className="menu menu-link">
              <div className="menu-content">
                <p> Ready for quiz ? </p>
                <a href="/QuizChoice">Take Me There</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="maths" className="maths">
        <div className="subject-title">
          <h3>Mathematics</h3>
        </div>

        <div className="flashcard-container">
          <div className="flashcard">
            <div className="flashcard-content">
              <h2>{addition.title}</h2>

              <p>
                {addition.flashcard ? (
                  renderFlashcardsWithSpaces(addition.flashcard)
                ) : (
                  <span> {error && <p>Error: {error}</p>} </span>
                )}
              </p>
            </div>
            <div className="flashcard-image">
              <img src="assets/images/addition.png" alt="Addition" />
            </div>
            <div className="flashcard-title">
              <h2>{addition.title}</h2>
            </div>
          </div>
          <div className="flashcard">
            <div className="flashcard-content">
              <h2>{subtraction.title}</h2>
              <p>
                {subtraction.flashcard ? (
                  renderFlashcardsWithSpaces(subtraction.flashcard)
                ) : (
                  <span> {error && <p>Error: {error}</p>} </span>
                )}
              </p>
            </div>
            <div className="flashcard-image">
              <img src="/assets/images/subtraction.png" alt="Subtraction" />
            </div>
            <div className="flashcard-title">
              <h2>{subtraction.title}</h2>
            </div>
          </div>
          <div className="flashcard">
            <div className="flashcard-content">
              <h2>{multiplication.title}</h2>
              <p>
                {multiplication.flashcard ? (
                  renderFlashcardsWithSpaces(multiplication.flashcard)
                ) : (
                  <span> {error && <p>Error: {error}</p>} </span>
                )}
              </p>
            </div>
            <div className="flashcard-image">
              <img
                src="/assets/images/multiplication.png"
                alt="Multiplication"
              />
            </div>
            <div className="flashcard-title">
              <h2>{multiplication.title}</h2>
            </div>
          </div>
          <div className="flashcard">
            <div className="flashcard-content">
              <h2>{division.title}</h2>
              <p>
                {division.flashcard ? (
                  renderFlashcardsWithSpaces(division.flashcard)
                ) : (
                  <span> {error && <p>Error: {error}</p>} </span>
                )}
              </p>
            </div>
            <div className="flashcard-image">
              <img src="/assets/images/division.png" alt="Division" />
            </div>
            <div className="flashcard-title">
              <h2>{division.title}</h2>
            </div>
          </div>
        </div>

        <a href="#maths-continued">
          <div className="scrolldown">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </section>

      <section id="maths-continued" className="maths-continued">
        <div className="subject-title">
          <h3>Mathematics Continued</h3>
        </div>

        <div className="flashcard-container">
          <div className="flashcard">
            <div className="flashcard-content">
              <h2>{fraction.title}</h2>
              <p>
                {fraction.flashcard ? (
                  renderFlashcardsWithSpaces(fraction.flashcard)
                ) : (
                  <span> {error && <p>Error: {error}</p>} </span>
                )}
              </p>
            </div>
            <div className="flashcard-image">
              <img src="/assets/images/fraction.png" />
            </div>
            <div className="flashcard-title">
              <h2>{fraction.title}</h2>
            </div>
          </div>
          <div className="flashcard">
            <div className="flashcard-content">
              <h2>{percentage.title}</h2>
              <p>
                {percentage.flashcard ? (
                  renderFlashcardsWithSpaces(percentage.flashcard)
                ) : (
                  <span> {error && <p>Error: {error}</p>} </span>
                )}
              </p>
            </div>
            <div className="flashcard-image">
              <img src="/assets/images/percentage.png" />
            </div>
            <div className="flashcard-title">
              <h2>{percentage.title}</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="english" className="english">
        <div className="subject-title">
          <h3>English</h3>
        </div>

        <div className="flashcard-container">
          <div className="flashcard">
            <div className="flashcard-content">
              <h2>{fullStop.title}</h2>
              <p>
                {fullStop.flashcard ? (
                  renderFlashcardsWithSpaces(fullStop.flashcard)
                ) : (
                  <span> {error && <p>Error: {error}</p>} </span>
                )}
              </p>
            </div>
            <div className="flashcard-image">
              <img src="/assets/images/decimal.png" />
            </div>
            <div className="flashcard-title">
              <h2>{fullStop.title}</h2>
            </div>
          </div>
          <div className="flashcard">
            <div className="flashcard-content">
              <h2>{comma.title}</h2>
              <p>
                {comma.flashcard ? (
                  renderFlashcardsWithSpaces(comma.flashcard)
                ) : (
                  <span> {error && <p>Error: {error}</p>} </span>
                )}
              </p>
            </div>
            <div className="flashcard-image">
              <img src="/assets/images/comma.png" />
            </div>
            <div className="flashcard-title">
              <h2>{comma.title}</h2>
            </div>
          </div>
          <div className="flashcard">
            <div className="flashcard-content">
              <h2>{questionMark.title}</h2>
              <p>
                {questionMark.flashcard ? (
                  renderFlashcardsWithSpaces(questionMark.flashcard)
                ) : (
                  <span> {error && <p>Error: {error}</p>} </span>
                )}
              </p>
            </div>
            <div className="flashcard-image">
              <img src="/assets/images/question-mark.png" />
            </div>
            <div className="flashcard-title">
              <h2>{questionMark.title}</h2>
            </div>
          </div>
          <div className="flashcard">
            <div className="flashcard-content">
              <h2>{exclamationMark.title}</h2>
              <p>
                {exclamationMark.flashcard ? (
                  renderFlashcardsWithSpaces(exclamationMark.flashcard)
                ) : (
                  <span> {error && <p>Error: {error}</p>} </span>
                )}
              </p>
            </div>
            <div className="flashcard-image">
              <img src="/assets/images/exclamation-mark.png" />
            </div>
            <div class="flashcard-title">
              <h2>{exclamationMark.title}</h2>
            </div>
          </div>
        </div>
      </section>

      <a href="#subjects" className={`scrollup ${showScroll ? "active" : ""}`}>
        <i className="fas fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default Flashcard;
