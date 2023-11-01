// imports
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateRole,
    exit
} = require('./db/queries');


// Question array
const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'taskOne',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit'],
    },
];

// Function to initialize questions for user
function init() {
    console.log('========== WELCOME TO EMPLOYEE MANAGER! ==========');
    inquirer
        .prompt (questions)
        .then ((answers) => {
            console.log('init', answers);
        });
};

// Call to initialize app
init();


// class recording 
// end of day thursday, 26 oct @ 2:17 pm

// process
// schema, seeds, queries in workbench, then put it in js and work it