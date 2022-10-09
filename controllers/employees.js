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