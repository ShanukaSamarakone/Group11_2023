import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './quiz choice.css'; 

const quizzes = [
  { type: 'addition', title: 'Addition Quiz' },
  { type: 'subtraction', title: 'Subtraction Quiz' },
  { type: 'multiplication', title: 'Multiplication Quiz' },
  { type: 'division', title: 'Division Quiz' },
  { type: 'percentage', title: 'Percentage Quiz' },
  { type: 'fullstop', title: 'Full Stop Quiz' },
  { type: 'comma', title: 'Comma Quiz' },
  { type: 'question', title: 'Question Mark Quiz' },
  { type: 'exclamation', title: 'Exclamation Mark Quiz' },
];

const QuizDropdown = ({ quizType, quizzes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={() => setIsOpen(!isOpen)}>
        <span className={`${styles.dropdownArrow} ${isOpen ? styles.open : ''}`}></span>
        <span className={styles.dropdownText}>{quizType} Quiz</span>
      </div>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
        {quizzes.map((quiz) => (
          <QuizButton key={quiz.type} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};
// amaans code

// end of amaans code
  const handleQuizClick = () => {
    if (quiz.type === 'addition') {
      navigate('/quiz1'); 
    }
    if (quiz.type === 'subtraction'){
      navigate('/quiz2');
    }
    if (quiz.type === 'multiplication'){
      navigate('/quiz3');
    }
    if (quiz.type === 'division'){
      navigate('/quiz4');
    }
    if (quiz.type === 'percentage'){
      navigate('/quiz5');
    }
    if (quiz.type === 'fullstop'){
      navigate('/english1');
    }
    if (quiz.type === 'comma'){
      navigate('/english2');
    }
    if (quiz.type === 'question'){
      navigate('/english3');
    }
    if (quiz.type === 'exclamation'){
      navigate('/english4');
    }
  };
// Amaans progress trackers


function App() {
  const mathQuizzes = quizzes.slice(0, 5);
  const englishQuizzes = quizzes.slice(5);

  return (
    <div className="main">
      <h1>Welcome to the Quiz Selector</h1>
      <div className="dropdown-wrapper">
        <QuizDropdown quizType="Mathematics" quizzes={mathQuizzes} />
        <QuizDropdown quizType="English" quizzes={englishQuizzes} />
      </div>
    </div>
  );
}

export default App;