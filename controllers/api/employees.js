const Employee = require('../../models/employee');
const User = require('../../models/user');
// const { checkToken } = require('../../src/utilities/users-api');
//const { exists } = require('../../models/user');


async function userExists(req, res) { // add await?
    try{
    const isUser = Employee.find({user: req.user._id , isUser: true});
    return res.json(isUser);
    }catch (error) {
        res.status(400).json(error);
        console.log("isUserError");
    }
}
async function userIsSuper(req, res) {
    try {
    const isSuper = Employee.find({user: req.user._id , isSuper: true});
    return res.json(isSuper);
    }catch (error) {
        res.status(400).json(error);
        console.log("isSuperUserError")
    }
}
async function createEmployee(req,res){
    const employee = await Employee.create(req.body);
    return res.json(employee)
} //add save

function findEmployee(req, res) {
    const user = Employee.findOne({user: user._id})
    const employee = Employee.findOne({employee : employee._id})
    if (!Employee){
        createEmployee()
    }
    else {
        return res.json(employee._id);
    }
}



module.exports = {
    findEmployee,
    createEmployee,
    userExists,
    userIsSuper,


}

    //dont really need this 
// function employeeAdded(req, res){
//      try{
//      const employee = Employee.create({empId: Math.floor(1000000000000 + Math.random() + ({lastName: employee.lastName._id}))});
//      }
//      catch (error) {
//         alert('id creation error');
//         res.status(400).json(error);
//     }
//     }



// / async function createId(employee) {
    //     try{
    //     const userHasId = Employee.getEmployee(req.employee._id);
    //     const currUser = await createEmployee(req.employee._id);
    //     if (userHasId.empId == exists && currUser == exists){
    //     return res.json(employee);
    //     }
    //     if (userHasId.empId !== exists && currUser !== exists){
    //         employeeAdded();
    //     }
    //     return res.json(employee);
    //     }
    //     catch (error) {
    //         alert('id error');
    //         res.status(400).json(error);
    //     }
    // }