USE employees_db;


--inserting values into departments
INSERT INTO deparment(id,name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

--insert values into roles

INSERT INTO roles(id,title,salary,department_id)
VALUES ("Sales Lead", 100000, 5),
       ("Lead Engineer", 150000, 1),
       ("Junior Engineer",90000,1),
       ("Legal Team Lead",200000,3),
       ("Accountant",80000,2);


--inseert values into employees
INSERT INTO employee(id,first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, 3),
       ("Morgan","Kelly",2,1),
       ("Katie","Neal",4,NULL),
       ("Sydney","Milburn",3,6);
     
       