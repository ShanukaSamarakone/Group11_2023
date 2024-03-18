document.addEventListener('DOMContentLoaded', function() {
  const dropdownHeaders = document.querySelectorAll('.dropdown-header');
  const dropdownArrows = document.querySelectorAll('.dropdown-arrow');
  const dropdownContents = document.querySelectorAll('.dropdown-content');

  dropdownHeaders.forEach((header, index) => {
    header.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdownContents[index].classList.toggle('show');
      header.parentElement.classList.toggle('open');
    });
  });

  dropdownArrows.forEach((arrow, index) => {
    arrow.addEventListener('click', function(event) {
      event.stopPropagation(); 
      dropdownContents[index].classList.toggle('show');
      arrow.parentElement.parentElement.classList.toggle('open');
    });
  });

// Amaans Code

  function updateProgress(quizType, score) {
    const maxScore = 5;
    const percentage = (score / maxScore) * 100;
    const progressBar = document.querySelector(`.progress-bar-${quizType}`);
    const progressLabel = document.querySelector(`.progress-${quizType}`);

    progressBar.style.width = `${percentage}%`;
    progressBar.style.backgroundColor = 'green'; 
    progressLabel.textContent = `${Math.round(percentage)}%`;
  }

  updateProgress('addition', 1);
  updateProgress('subtraction', 2);
  updateProgress('multiplication', 3);
  updateProgress('divison', 4);
  updateProgress('percentage', 5);
  updateProgress('fullstop', 1);
  updateProgress('comma', 2);
  updateProgress('exclamation', 3);
});
