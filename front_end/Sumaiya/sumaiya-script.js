// Add some example data
const leaderboardData = [
    { name: 'John', score: 95 },
    { name: 'Jane', score: 90 },
    { name: 'Sam', score: 85 },
    { name: 'Lucy', score: 80 },
];

// Display the data on the leaderboard
const leaderboardTable = document.getElementById('leaderboard-table');
leaderboardData.forEach(({ name, score }) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const scoreCell = document.createElement('td');
    scoreCell.textContent = score;
    row.appendChild(scoreCell);

    leaderboardTable.appendChild(row);
});