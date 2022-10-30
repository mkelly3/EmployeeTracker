--Create a Courese Database--
DROP DATABASE IF EXISTS employeeTracker_db;

--create an employeeTracker_db and use it--
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

--create deparment table--
DROP TABLE IF EXISTS department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

--In the roles table need an id that relates to the primary key, title, salary, department_id--


--create employess table --
--in the employees table need id, first_name, last_name, role_id, manager_id"