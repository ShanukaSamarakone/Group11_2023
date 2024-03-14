const progressContainer = document.querySelector('.progress-container');
const progressBar = document.querySelector('.progress-bar');
const progressLabel = document.querySelector('.progress-label');
const checkboxes = document.querySelectorAll('.question');

let progress = 0; // Initial progress (Make this equal the progress in the database after pulling it)

// Function to update the progress bar
function updateProgress(checkbox) {
  if (checkbox.checked) {
    progress += 20;
  } else {
    progress -= 20;
  }
  if (progress < 0) progress = 0;
  if (progress > 100) progress = 100;

  progressBar.style.width = `${progress}%`;
  progressLabel.textContent = `${progress}%`;
}

//if progress != negative && if progress is not bigger than 5
//progress = score * 20