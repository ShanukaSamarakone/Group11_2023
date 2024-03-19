const connection = require('../database.js');//importing database connection to sql.

module.exports = {//imports functions declartion of get users

    getUsers : async (req, res) => {
        connection.query('SELECT * FROM dummy_score', (err, results) => {//a SQL query to select all records from the users 
            if (err) throw err;

            return res
                    .status(200)
                    .json({success : true , data : results});
        });
    }
}