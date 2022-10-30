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
                //using the mysql method of .end to stop the command line from running 
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
   
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the role?"
                
        },
        {
            type: 'input',
            name: 'salary',
            message: 'How much do they make?'
                
        },
        {   
            type: 'input',
            name: 'departmentId',
            message: 'What is the department id?'
        }
        ])
        .then(function ({ title, salary, departmentId }) {
            //using the inteteger value inputed by the user to find which department the role is in
            // let departmentIndex = departmentArr.indexOf(departmentId);
            //adding the inputs into the role table in mysql
            connection.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${title}', '${salary}', ${departmentId})`, function (err, data) {
                if (err) throw err;
                console.log("Role Added");
                promptInfo();
            })
        })
}

function addEmployee(){
   //prompting user for information about the employee
   inquirer
   .prompt([
    {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?"
        
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?"
        
    },
    {   
        type: 'input',
        name: 'roleId',
        message: 'What is the employees role id?'
    },
    {   
        type: 'input',
        name: 'managerId',
        message: 'What is the employees manager id if they have one?'
    }
   ])
   .then(function({firstName, lastName,roleId,managerId}){
    //use the query method to insert all of the values into the employee table
    connection.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}','${roleId}',${managerId})`, function (err, data) {
        if (err) throw err;
        console.log("Employee Added");
        promptInfo();
    })
   });
}



//function to update an employes role

function updateEmployeeRole() {
    connection.query(`SELECT * FROM employee`, function (err, data) {
        if (err) throw err;

        let employees = [];
        let roles = [];

        for (let i = 0; i < data.length; i++) {
            employees.push(data[i].first_name)
        }

        connection.query(`SELECT * FROM roles`, function (err, data) {
            if (err) throw err;

            for (let i = 0; i < data.length; i++) {
                roles.push(data[i].title)
            }

            inquirer
                .prompt([
                    {
                        name: 'employee_id',
                        message: "Who's role needs to be updated",
                        type: 'list',
                        choices: employees
                    },
                    {
                        name: 'role_id',
                        message: "What is the new role?",
                        type: 'list',
                        choices: roles
                    }
                ]).then(function ({ employee_id, role_id }) {
                    //UPDATE `table_name` SET `column_name` = `new_value' [WHERE condition]
                    connection.query(`UPDATE employee SET role_id = ${roles.indexOf(role_id) + 1} WHERE id = ${employees.indexOf(employee_id) + 1}`, function (err, data) {
                        if (err) throw err;

                        promptInfo();
                    })
                })
        })

    })
}