--Create a Courese Database--
DROP DATABASE IF EXISTS employees_db;

--create an employeeTracker_db and use it--
CREATE DATABASE employees_db;

USE employees_db;

--create deparment table--
DROP TABLE IF EXISTS department;
CREATE TABLE department(
id INT NOT NULL auto_increment,
name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

--In the roles table need an id that relates to the primary key, title, salary, department_id
DROP TABLE IF EXISTS roles;

CREATE TABLE roles(
   id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

--create employess table --
--in the employees table need id, first_name, last_name, role_id, manager_id"

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);
