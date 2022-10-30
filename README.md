# Employee Tracker

## Description 
This application uses the command line to have users input information about departments, roles and employees. The user is first prompted to either view the department, role or employee table, add an employee, department or role and finally the user can update information about the employees role or manager. Additionally, when the user views any othe options a table is displayed with the command line.
  

## Table of Contents
- [Description](#description)
- [Video](#walk-through-video)
- [Code Snippet](#code-snippet)
- [Technologies Used](#technologies-used)
- [Installation](#instalation)
- [Contact Information](#contact-information)


## Walk Through Video 
[Walk Through Video](https://drive.google.com/file/d/1D2ZTElEXfod2lWHqoyS_T5UpQBUxTkdo/view)

## Code Snippet
This function uses the inqurier prompt method to prompt the user to answer questions in the command line for information about the users employee. The information provided is added to the employee table in mysql. 

```
function addEmployee(){
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
    connection.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}','${roleId}',${managerId})`, function (err, data) {
        if (err) throw err;
        console.log("Employee Added");
        promptInfo();
    })
   });
}
```


## Technologies Used
- JavaScript
- Node.Js
- MySQL

## Instalation
- inquirer
- mysql2
- console.table

## Contact Information 
- [GitHub](https://github.com/mkelly3/)
- [Linkedin](https://www.linkedin.com/in/morgan-kelly15/)