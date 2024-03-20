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

//Amaans Code Start
const QuizButton = ({ quiz }) => {
  const [progress, setProgress] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch(`http://localhost:8080/progress-tracker/all-users`);
        const data = await response.json();

        const scoreMapping = {
          'addition': 'additionScore',
          'subtraction': 'subtractionScore',
          'multiplication': 'multiplicationScore',
          'division': 'divisionScore',
          'percentage': 'percentageScore',
          'fullstop': 'fullstopScore',
          'comma': 'commaScore',
          'question': 'questionmarkScore',
          'exclamation': 'exclamationScore',
        };

        if (data.length > 0) {
          const firstUserProgress = data[0];
          const quizScoreProperty = scoreMapping[quiz.type];
          const quizScore = firstUserProgress[quizScoreProperty];
          setProgress(quizScore || 0); 
        }
      } catch (error) {
        console.error('Error fetching progress values:', error);
      }
    };

    fetchProgress();
  }, [quiz.type]);

  const maxScore = 5; 
  const percentage = (progress / maxScore) * 100;
// Amaans code end

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

return (
  <button className="qc-quiz-button" onClick={handleQuizClick}>
    <div className="qc-question-title">{quiz.title}</div>
    <div className="qc-progress-container" style={{ position: 'relative', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', marginLeft: '300px', border: '1px solid black' }}>
      <div className="qc-progress-bar" style={{ position: 'absolute', width: `${percentage}%`, height: '100%', backgroundColor: '#00d072', borderRadius: '50%', transition: 'width 1s ease', animation: 'glow 1.5s infinite alternate' }}></div>
      <div className="qc-progress-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '14px', color: 'black', zIndex: 2 }}>
        {progress !== null ? `${Math.round(percentage)}%` : 'Loading...'}
      </div>
    </div>
  </button>
);
};

// End of Amaans Progress Trackers

function App() {
  const mathQuizzes = quizzes.slice(0, 5);
  const englishQuizzes = quizzes.slice(5);

  return (
    <div className="main">
      <h1>Welcome To The Quiz Selector!</h1>
      <div className="dropdown-wrapper">
        <QuizDropdown quizType="Mathematics" quizzes={mathQuizzes} />
        <QuizDropdown quizType="English" quizzes={englishQuizzes} />
      </div>
    </div>
  );
}

export default App;