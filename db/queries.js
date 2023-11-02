const connection = require('../config/connection');

function getAllDepartments() {
    const query = `SELECT * FROM department;`;
    connection.query(query, (err, results) => {
        if(err) {
            console.log(err);
        }
        console.log(results);
    });
};
// getAllRoles,
// getAllEmployees,
// addDepartment,
// addRole,
// addEmployee,
// updateRole,
// exit

module.exports = {
    getAllDepartments,
    // getAllRoles,
    // getAllEmployees,
    // addDepartment,
    // addRole,
    // addEmployee,
    // exit
}