# EMPLOYEE TRACKER

## Description
Command-line app to help small companies manage their employees, from ice cream shops to Viking raids!
UT Austin Coding Bootcamp Challenge 12.

## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Technologies Used](#technologies-used)
* [References](#references)
* [Links](#links)
* [Preview](#preview)
* [License](#license)

## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Technologies Used
1. JavaScript
2. Node.js
3. Express
4. MySQL
5. Inquirer
6. dotenv
7. Heroku

## References
1. UTA Bootcamp curriculum, instructor examples and student solved examples
2. Andres Miro - helped with class creation and property assignment
3. Basic SVG shape components and theory - <a href='https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes'>mdn web docs</a>

## Links
### <a href="https://github.com/bmancuso3/employee-tracker">GitHub Repository</a>

### <a href="https://bmancuso3.github.io/employee-tracker">Live Site - Not Applicable</a>

### <a href="https://drive.google.com/file/d/1i4w-h0pWKxindg4VEiuMEb8uMyrDsiaH/view">Video Walk-Through</a>

## Preview

### EX1
<img src='./examples/gen-logo-EX1.svg' alt='EX1'/>


## License
<img src='https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge'>

Copyright  2023  bmancuso3

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.