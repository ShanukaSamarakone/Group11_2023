import React, { useState, useEffect } from 'react';
import './Quiz.css';   

const Quiz = () => {
  const MAX_QUESTIONS = 5; 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [answerFeedback, setAnswerFeedback] = useState('');
  const [submitButtonVisible, setSubmitButtonVisible] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:8080/quiz/range?startId=36&endId=60');
        const data = await response.json();
        const selectedQuestions = data.sort(() => 0.5 - Math.random()).slice(0, MAX_QUESTIONS);
        setQuestions(selectedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = () => {
    const isCorrect = userAnswer === String(questions[currentQuestionIndex].correctAnswer);
    if (isCorrect) {
      setScore(score + 1);
      setAnswerFeedback('Correct Answer!');
    } else {
      setAnswerFeedback('Incorrect Answer!');
    }
    setSubmitButtonVisible(false);

    setTimeout(() => {
      if (currentQuestionIndex + 1 < MAX_QUESTIONS) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizFinished(true);
      }
      setAnswerFeedback('');
      setUserAnswer('');
      setSubmitButtonVisible(true);
    }, 1000);
  };


  const submitScore = async (userId, finalScore) => {
    try {
      const response = await fetch(`http://localhost:8080/quiz/updateDivisionScoreuserId=${userId}&newScore=${finalScore}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('Score submitted:', data);
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  useEffect(() => {
    if (quizFinished) {

      submitScore(1, score);
    }
  }, [quizFinished, score]);


  if (quizFinished) {
    const percentage = (score / MAX_QUESTIONS) * 100;
    return (
      <section className="page score" style={{ display: 'block' }}>
        <div className="content">
          <h1>Quiz Finished</h1>
          <span>Your Score: {score}/{MAX_QUESTIONS}</span>
          <div className="progress-container">
            <div className="progress-bar-score" style={{ width: `${percentage}%` }}></div>
            <div className="progress-score">{`${Math.round(percentage)}%`}</div>
          </div>
          <button className="Return" onClick={() => window.location.href = '/QuizChoice'}>Return</button>
        </div>
      </section>
    );
  }

  return (
    <main className="main">
      <section className="page home">
        <div className="home-content">
          <h1>{questions.length > 0 ? questions[currentQuestionIndex].questionText : 'Loading...'}</h1>
          <div>
            <input
              type="text"
              value={userAnswer}
              placeholder="Your answer"
              onChange={handleAnswerChange}
            />
            {submitButtonVisible && (
              <button className="Submit" onClick={checkAnswer}>Submit Answer</button>
            )}
            <p>{answerFeedback}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quiz;