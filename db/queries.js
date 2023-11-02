const inquirer = require('inquirer');
const connection = require('../config/connection');

function getAllDepartments(callback) {
    const query = 
        `SELECT id, dep_name AS department 
        FROM department;`;
    connection.query(query, (err, results) => {
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, results);
        }
    });
};

function getAllRoles(callback) {
    const query = 
        `SELECT role.id, role.title, department.dep_name, role.salary 
        FROM role 
        JOIN department 
        ON role.dep_id = department.id;`;
    connection.query(query, (err, results) => {
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, results);
        }
    });
};

function getAllEmployees(callback) {
    const query = 
        `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dep_name, role.salary, employee.manager_id
        FROM employee
        JOIN role on employee.role_id = role.id
        JOIN department on role.dep_id = department.id;`;
    connection.query(query, (err, results) => {
        if(err) {
            callback(err, null);
        }
        else {
            callback(null, results);
        }
    });
};

function addDepartment(callback) {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the new department name?',
                name: 'name',
            },
        ])
        .then((data) => {
            const {name} = data
            
            const query = 
            `INSERT INTO department (dep_name)
            VALUES
            ("${name}");`;
            connection.query(query, (err, results) => {
                if(err) {
                    callback(err, null);
                }
                else {
                    console.log(`Added ${name} to departments.`)
                    getAllDepartments(callback);
                };
        });
    });
};

// addRole,
// addEmployee,
// updateRole,

function exit() {
    console.log(' ');
    console.log("========== Nice managing, goodbye! ==========");
    console.log(' ');
    connection.end();
};

module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    // addRole,
    // addEmployee,
    // updateRole,
    exit
}