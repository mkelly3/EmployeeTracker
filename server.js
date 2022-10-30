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
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
   
  );

//   connection.connect(function(err){
//     if (err) throw err;
//     promptInfo();
//   });

//functions to prompt the command line with all the following options, view, add, update or exit 



function viewAllDepartment(){
    connection.query(`SELECT * FROM department`,function(err,data){
        if(err) throw err;
        console.table(data);
    });
    promptInfo();
};

function viewRoles(){
    connection.query(`SELECT * FROM roles`,function(err,data){
    if(err) throw err;
    console.table(data)
});
    promptInfo();
};
function viewAllEmployees(){
    connection.query(`SELECT * FROM employee`,function(err,data){
    if(err) throw err;
    console.table(data)
});
    promptInfo();   
};

function addDepartment(){
    inquirer
        .prompt(
            {
                name: 'name',
                message: "What is the department's name?",
                type: 'input'
            }
            ).then(function ({ name }) {
                connection.query(`INSERT INTO department (name) VALUES ('${name}')`, function (err, data) {
                    if (err) throw err;
                    console.log(`Added`)
                    ();
            })
        })

}

function promptInfo(){
    inquirer
    .prompt({
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices:["View all Departments","View all Roles","View all Employees","Add a Department","Add a Role","Add an Employee","Update an Employee Role","Exit"]
    })
    .then(function({option}) {
        switch(option){
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
            case "Exit":
                connection.end();
                break;
        }

    });
}
promptInfo();