const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');


// Question array
const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'taskOne',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit'],
    },
];

// Function to take user answers and distribute it to selected logo components
function writeToFile(fileName, answers) {
    // console.log('writetofile', answers);

    let shape;

    if (answers.logoShape === 'Circle') {
        shape = new Circle();
        // console.log('circle', shape);
    }
    else if (answers.logoShape === 'Square') {
        shape = new Square();
        // console.log('square', shape);
    }
    else if (answers.logoShape === 'Triangle') {
        shape = new Triangle();
        // console.log('triangle', shape);
    }
    else {
        console.log('Invalid or unsupported shape! :(')
    }

    // shape.setShapeColor(answers.shapeColor);
    // shape.setText(answers.text);
    // shape.setTextColor(answers.textColor);

    // const svg = shape.render();
    // console.log('svg string', svg);

// Writes returned svg tag to file and logs ensuing result
    // fs.writeFile(fileName, svg, (err) =>
    // err ? console.log(err) : console.log('Successfully created gen-logo.svg!')
    // );

};

// Function to initialize questions for user
function init() {
    inquirer
        .prompt (questions)
        .then ((answers) => {
            console.log('init', answers);
            // writeToFile('gen-logo.svg', answers);
        });
};

// Function call to initialize app
init();


// class recording 
// end of day thursday, 26 oct @ 2:17 pm

// process
// schema, seeds, queries in workbench, then put it in js and work it