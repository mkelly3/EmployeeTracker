const SQL = require("mysql2");
const inquirer = require("inquirer");
// const express = require("express");
// const PORT = process.env.PORT || 3001;
// const app = express();



//Connect to mysql database 
const db = SQL.createConnection(
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
    db.query(`SELECT * FROM department`,function(err,data){
        if(err) throw err;
        console.table(data)
        onFirstQuestion();
    });

}


onFirstQuestion();