function updateProgress() {
    const tasks = document.querySelectorAll('.tasks input[type="checkbox"]');
    const totalTasks = tasks.length;
    let completedTasks = 0;

    tasks.forEach(task => {
        if (task.checked) {
            completedTasks++;
        }
    });

    const progress = Math.round((completedTasks / totalTasks) * 100);
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    progressBar.style.transform = `rotate(-90deg) scaleY(${progress / 100})`;
    progressText.textContent = `${progress}%`;
}