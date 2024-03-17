let temporaryAnswers = ['4', '10', '15','13','18'];
let currentQuestionIndex = 0;
let pageCount = 1
let score = 5;
let temporaryQuestions = [
    "What is 2 + 2?",
    "What is 4 + 6?",
    "What is 5 + 10?",
    "What is 3 + 10?",
    "What is 8 + 10?"
];

function displayQuestion() {
    const currentQuestionTextElement = document.getElementById(`questionText${Math.ceil(pageCount / 2)}`);
    const currentAnswerTextElement = document.getElementById(`answerText${Math.ceil(pageCount / 2)}`);
    
    if (currentQuestionTextElement && currentAnswerTextElement) {
        currentQuestionTextElement.textContent = temporaryQuestions[Math.floor((pageCount - 1) / 2)];

        const currentPage = document.getElementById(`page${pageCount}`);
        currentPage.style.display = 'block';

        for (let i = 1; i <= temporaryQuestions.length * 2; i++) {
            if (i !== pageCount) {
                const page = document.getElementById(`page${i}`);
                page.style.display = 'none';
            }
        }
    }
}

function changePage() {
    const currentPageType = (pageCount % 2 === 0) ? 'answer' : 'question';

    pageCount++;
    const nextPageType = (pageCount % 2 === 0) ? 'answer' : 'question';

    if (pageCount <= temporaryQuestions.length * 2) {
        const nextPage = document.getElementById(`page${pageCount}`);
        nextPage.style.display = 'block';

        const currentPage = document.getElementById(`page${pageCount - 1}`);
        currentPage.style.display = 'none';

        if (nextPageType === 'question') {
            displayQuestion();
        }
    } else {
        const nextPage = document.getElementById(`page11`); // Target the score page directly
        nextPage.style.display = 'block';

        const currentPage = document.getElementById(`page${pageCount - 1}`);
        currentPage.style.display = 'none';
        updateScore();
    }
}

function checkAnswer(questionNumber) {
    const userAnswer = document.getElementById(`user-answer${questionNumber}`).value;
    const answerTextElement = document.getElementById(`answerText${questionNumber}`);
    const submitButton = document.querySelector(`#page${questionNumber * 2} .Submit`);
    const nextButton = document.querySelector(`#page${questionNumber * 2 + 1} .Next`);

    if (userAnswer === temporaryAnswers[questionNumber - 1]) {
        answerTextElement.textContent = 'Correct!';
        if (submitButton) {
            submitButton.style.display = 'none';
        }
        if (nextButton) {
            nextButton.style.display = 'block';
        }
        setTimeout(() => changePage(), 1000);
    } else {
        answerTextElement.textContent = 'Incorrect.';
        score = score - 1;
        if (submitButton) {
            submitButton.style.display = 'none';
        }
        setTimeout(() => changePage(), 1000);
    }
}

function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Your Score: ${score}/5`;
}

displayQuestion();
