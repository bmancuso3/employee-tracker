const connection = require('../config/connection');

function getAllDepartments() {
    const query = 
        `SELECT id, dep_name AS department 
        FROM department;`;
    connection.query(query, (err, results) => {
        if(err) {
            console.log(err);
        }
        console.table(results);
    });
};

function getAllRoles() {
    const query = 
        `SELECT role.id, role.title, department.dep_name, role.salary 
        FROM role 
        JOIN department 
        ON role.dep_id = department.id;`;
    connection.query(query, (err, results) => {
        if(err) {
            console.log(err);
        }
        console.table(results);
    });
};

// getAllEmployees,
// addDepartment,
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
    // getAllEmployees,
    // addDepartment,
    // addRole,
    // addEmployee,
    exit
}