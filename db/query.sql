USE bv4dkp6qv73a9k05;

-- view all departments (dep_name, dep id)
SELECT id, dep_name AS department FROM department;

-- view all roles (job title, role id, dep, salary)
SELECT role.id, role.title, department.dep_name, role.salary
FROM role
JOIN department ON role.dep_id = department.id;

-- view all employees (employee id, first name, last name, title, dep, salary, manager)
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dep_name, role.salary, employee.manager_id
FROM employee
JOIN role on employee.role_id = role.id
JOIN department on role.dep_id = department.id;

-- add a department (input new dep name)
INSERT INTO department (dep_name)
	VALUES
    ("new Viking dep");

-- add a role (input title, salary, dep)
INSERT INTO role (title, salary, dep_id)
	VALUES
    ("new Viking", 300, 3);

-- add an employee (input first name, last name, select role, select manager (from correct dep?))
INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
    ("Togar", "Flaggardson", 6, 6);

-- update an employee role (select employee, select new role)
UPDATE employee
SET role_id = 1
WHERE id = 1;