import React, { useEffect, useState } from "react";
import axios from "axios";

function Flashcard() {
  const [addition, setAdditionFlashcard] = useState([]);

  useEffect(() => {
    loadAdditionFlashcard();
  }, []);

  const loadAdditionFlashcard = async () => {
    const result = await axios.get(
      "http://localhost:8080/flashcard/getFlashcard/1"
    );
    setAdditionFlashcard(result.data);
  };

  const [subtraction, setSubtractionFlashcard] = useState([]);

  useEffect(() => {
    loadSubtractionFlashcard();
  }, []);

  const loadSubtractionFlashcard = async () => {
    const result = await axios.get(
      "http://localhost:8080/flashcard/getFlashcard/2"
    );
    setSubtractionFlashcard(result.data);
  };

  const [multiplication, setMultiplicationFlashcard] = useState([]);

  useEffect(() => {
    loadMultiplicationFlashcard();
  }, []);

  const loadMultiplicationFlashcard = async () => {
    const result = await axios.get(
      "http://localhost:8080/flashcard/getFlashcard/3"
    );
    setMultiplicationFlashcard(result.data);
  };

  const [division, setDivisionFlashcard] = useState([]);

  useEffect(() => {
    loadDivisionFlashcard();
  }, []);

  const loadDivisionFlashcard = async () => {
    const result = await axios.get(
      "http://localhost:8080/flashcard/getFlashcard/4"
    );
    setDivisionFlashcard(result.data);
  };

  const [fraction, setFractionFlashcard] = useState([]);

  useEffect(() => {
    loadFractionFlashcard();
  }, []);

  const loadFractionFlashcard = async () => {
    const result = await axios.get(
      "http://localhost:8080/flashcard/getFlashcard/5"
    );
    setFractionFlashcard(result.data);
  };

  const [percentage, setPercentageFlashcard] = useState([]);

  useEffect(() => {
    loadPercentageFlashcard();
  }, []);

  const loadPercentageFlashcard = async () => {
    const result = await axios.get(
      "http://localhost:8080/flashcard/getFlashcard/6"
    );
    setPercentageFlashcard(result.data);
  };

  const [fullStop, setFullStopFlashcard] = useState([]);

  useEffect(() => {
    loadFullStopFlashcard();
  }, []);

  const loadFullStopFlashcard = async () => {
    const result = await axios.get(
      "http://localhost:8080/flashcard/getFlashcard/7"
    );
    setFullStopFlashcard(result.data);
  };

  const [comma, setCommaFlashcard] = useState([]);

  useEffect(() => {
    loadCommaFlashcard();
  }, []);

  const loadCommaFlashcard = async () => {
    const result = await axios.get(
      "http://localhost:8080/flashcard/getFlashcard/8"
    );
    setCommaFlashcard(result.data);
  };

  const [questionMark, setQuestionMarkFlashcard] = useState([]);

  useEffect(() => {
    loadQuestionMarkFlashcard();
  }, []);

  const loadQuestionMarkFlashcard = async () => {
    const result = await axios.get(
      "http://localhost:8080/flashcard/getFlashcard/9"
    );
    setQuestionMarkFlashcard(result.data);
  };

  const [exclamationMark, setExclamationMarkFlashcard] = useState([]);

  useEffect(() => {
    loadExclamationMarkFlashcard();
  }, []);

  const loadExclamationMarkFlashcard = async () => {
    const result = await axios.get(
      "http://localhost:8080/flashcard/getFlashcard/10"
    );
    setExclamationMarkFlashcard(result.data);
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
                <a href="/front_end/Salah/Quiz Choice.html">Take Me There</a>
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
                  <span> Data not loaded </span>
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
                  <span> Data not loaded </span>
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
                  <span> Data not loaded </span>
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
                  <span> Data not loaded </span>
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
                  <span> Data not loaded </span>
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
                  <span> Data not loaded </span>
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
                  <span> Data not loaded </span>
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
                  <span> Data not loaded </span>
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
                  <span> Data not loaded </span>
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
                  <span> Data not loaded </span>
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
