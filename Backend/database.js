const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '172.31.82.194',
  user: 'G_11',
  password: '33EusmfWOk',
  database: 'G_11_DB',
  connectTimeout: 30000 // Adjust the timeout value as needed
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connection;
