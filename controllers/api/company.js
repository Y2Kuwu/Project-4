const Company = require('../../models/company');



async function findCompany(req,res){
    const company = await Company.findById(req.params.id);
    res.json(company)
}

async function createEmployee (req,res){
    try{
        return await Employee.create({employeeData});
        }
        catch (error) {
            res.status(400).json(error);
            console.log("failed to create employee")
        }
    }

async function createCompany (req,res){
    try{
        return await Company.create(req.body);
        }
        catch (error) {
            res.status(400).json(error);
            console.log("failed to create company")
    }
}



// function viewEmployee(req,res){

// }

module.exports = {
    createCompany,
    createEmployee,
    findCompany,
}
 // viewEmployee,
 //employeeList,
 // addEmployee,


//  function employeeList(req,res){
//     const employees = Company.find({employeeData}).sort('name').populate()
//     return res.json(employees);
// }

// async function addEmployee(req,res){
//     try{
//         const add = await Company.employeeList.push({employeeSchema})
//     }catch{

//     }
// }