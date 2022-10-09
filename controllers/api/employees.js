const employee = require('../../models/employee');
const User = require('../../models/employee');
const { exists } = require('../../models/user');

function createEmployee(req, res) {
    try {
        const employee = Employee.create(req.body);
        //const idCreate = Employee.createID(employee)
        return res.json(employee);
    } catch (error) {a
        alert('employee creation error')
        res.status(400).json(error);
    }
}

// function rand(req, res){
//      = Math.floor(1000000000000 + Math.random() + ({lastName: employee.lastName._id}))
// }

function employeeAdded(req, res){
     try{
     const employee = Employee.create({empId: Math.floor(1000000000000 + Math.random() + ({lastName: employee.lastName._id}))});
     }
     catch (error) {
        alert('id creation error');
        res.status(400).json(error);
    }
    }

async function createId(employee) {
    try{
    const userHasId = Employee.getEmployee(req.employee._id);
    const currUser = await createEmployee(req.employee._id);
    if (userHasId.empId == exists && currUser == exists){
    return res.json(employee);
    }
    if (userHasId.empId !== exists && currUser !== exists){
        employeeAdded();
    }
    return res.json(employee);
    }
    catch (error) {
        alert('id error');
        res.status(400).json(error);
    }
}