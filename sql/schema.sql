--Create a Courese Database--
DROP DATABASE IF EXISTS employees_db;

--create an employeeTracker_db and use it--
CREATE DATABASE employees_db;

USE employees_db;

--create deparment table--
DROP TABLE IF EXISTS department;
CREATE TABLE department(
id INT auto_increment KEY NOT NULL,
name VARCHAR(30),
PRIMARY KEY(id)
);

--In the roles table need an id that relates to the primary key, title, salary, department_id
DROP TABLE IF EXISTS roles;

CREATE TABLE roles(
id INT auto_increment PRIMARY KEY NOT NULL,
title VARCHAR(30),
salary DECIMAL(10),
department_id INT,
FOREIGN KEY (department_id),
REFERENCES department(id) ON DELETE CASCADE
);

--create employess table --
--in the employees table need id, first_name, last_name, role_id, manager_id"

DROP TABLE IF EXISTS employee;

CREATE TABLE employee(
id INT auto_increment PRIMARY KEY NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);