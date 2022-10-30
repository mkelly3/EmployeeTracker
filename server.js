const mysql= require("mysql2");
const inquirer = require("inquirer");
require("console.table");
// const express = require("express");
// const PORT = process.env.PORT || 3001;
// const app = express();



//Connect to mysql database 
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'employeeTracker_db'
    },
    console.log(`Connected to the employees_db database.`)
   
  );

  connection.connect(function(err){
    if (err) throw err;
    onFirstQuestion();
  });

//functions to prompt the command line with all the following options, view, add, update or exit 

function onFirstQuestion(){
    inquirer
    .prompt({
        type: "list",
        name: "firstOption",
        message: "What would you like to do?",
        choices:["View all Departments","View all Roles","View all Employees","Add a Department","Add a Role","Add an Employee","Update an Employee Role","Exit"]
    })
    .then((answer) =>{
        switch(answer){
            case "View all Departments":
                viewAllDepartment();
                break;
            case "View all Roles":
                viewRoles();
                break;
            case "View all Employees":
                viewAllEmployees();
                break;
            case "Add a Department":
                addDepartment();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add an Employee":
                addEmployee();
                break;
            case "Update an Employee Role":
                updateEmployeeRole();
                break;
            default:
                db.end();
                break;
        }

    });
}

function viewAllDepartment(){
    connection.query(`SELECT * FROM department`,function(err,data){
        if(err) throw err;
        console.table(data)
        onFirstQuestion();
    });
};

function viewRoles(){
    connection.query(`SELECT * FROM roles`,function(err,data){
    if(err) throw err;
    console.table(data)
    onFirstQuestion();
});
};
function viewAllEmployees(){
    connection.query(`SELECT * FROM employee`,function(err,data){
    if(err) throw err;
    console.table(data)
    onFirstQuestion();
});
};


onFirstQuestion();