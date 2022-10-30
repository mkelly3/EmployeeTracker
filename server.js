const SQL = require("mysql2");
const inquirer = require("inquirer");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();



//Connect to mysql database 
const db = SQL.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'courses_db'
    },
    console.log(`Connected to the courses_db database.`)
  );


// Query database
db.query('SELECT * FROM course_names', function (err, results) {
    console.log(results);
  });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  