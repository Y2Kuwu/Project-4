const Company = require('../../models/company');



async function getCompany(req,res){
    const getCompany = await Company.findById(req.params._id);  //or maybe req.body
    res.json(getCompany);
}

async function seeCompany(req,res){
    const company = await Company.seeComp(req.user._id);
    res.json(company)
}


async function createCompany (req,res){
    try{
        const createCompany = await Company.create(req.body); // _id
        res.json(createCompany)
        }
        catch (error) {
            res.status(400).json(error);
            console.log("failed to create company")
    }
}

async function createEmployee (req,res){
    try{
        const createEmployee = await Employee.createEmp({employeeData}); //req.body
        res.json(createEmployee)
        }
        catch (error) {
            res.status(400).json(error);
            console.log("failed to create employee")
        }
    }


    async function getEmployee(req,res){
        const employee = await Employee.findById(req.body);  //or maybe req.body
        res.json(employee);
    }





// function viewEmployee(req,res){

// }

module.exports = {
    createCompany,
    createEmployee,
    getEmployee,
    seeCompany,
    getCompany,
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