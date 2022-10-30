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


//functions to view data from in the department, roles and employees table
function viewAllDepartment(){
    connection.query(`SELECT * FROM department`,function(err,data){
        if(err) throw err;
         //using console.table to show all of the data from department
        console.table(data);
    });
    //prompting the user again to see if they want to take another action
    promptInfo();
};

function viewRoles(){
    connection.query(`SELECT * FROM roles`,function(err,data){
    if(err) throw err;
    //using console.table to show all of the data from roles
    console.table(data)
});
    promptInfo();
};
function viewAllEmployees(){
    connection.query(`SELECT * FROM employee`,function(err,data){
    if(err) throw err;
    //using console.table to show all of the data form employees
    console.table(data)
});
 //prompting the user again to see if they want to take another action
    promptInfo();   
};

//functions to add data to either the depatments, roles or employees
function addDepartment(){
    //prompting the user to input information about the department 
    inquirer
        .prompt(
            {
                name: 'name',
                message: "What is the department's name?",
                type: 'input'
            }
            ).then(function ({ name }) {
                //using mysql qery to insert the name to the department 
                connection.query(`INSERT INTO department (name) VALUES ('${name}')`, function (err, data) {
                    if (err) throw err;
                    console.log(`Added Department`)
                     //prompting the user again to see if they want to take another action
                    promptInfo();
            })
        });
}

function addRole(){
    //create an array for all departments and loop through them to find the role within it 
    let departmentArr = [];
    connection.query(`SELECT * FROM department`,function(err,data){
        if(err) throw err;
    
        for(var i =0; i<data.length;i++){
            departmentArr.push(data[i].name)
        }

        inquirer
        .prompt([
            
        ])

    });
}



