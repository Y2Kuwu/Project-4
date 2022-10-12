const Company = require('../../models/company');



async function getCompany(req,res){
    const company = await Company.find({});  //or maybe req.body
    res.json(company);
}

// async function createEmployee (req,res){  //use this for employee (global)
//     try{
//         const company = await Company.create(req.body); // _id
//         res.json(company)
//         }
//         catch (error) {
//             res.status(400).json(error);
//             console.log("failed to create company")
//     }
// }
// findOne from child model req.params._id push .save()   main 

async function searchCompanies (req, res){

}


async function createCompany (req, res){
    try{
    req.body.user = req.user._id;  //ensures the user is legit matches by user._id
    const company = await Company.create(req.body);
    console.log(req.body)
    res.json(company)
    }   
    catch(error){
        res.status(400).json(error);
        alert("Failed to create new company")
    }
}

async function deleteCompany (req, res){
    try{
    const company = await Company.deleteOne(req.body);
    console.log(req.body)
    res.json(company)
    }   
    catch(error){
        res.status(400).json(error);
        alert("Failed to delete company")
    }
}


// async function createEmployee (req,res){
//     try{
//         const createEmployee = await Employee.createEmp({employeeData}); //req.body
//         res.json(createEmployee)
//         }
//         catch (error) {
//             res.status(400).json(error);
//             console.log("failed to create employee")
//         }
//     }


//     async function getEmployee(req,res){
//         const employee = await Employee.findById(req.body);  //or maybe req.body
//         res.json(employee);
//     }





// function viewEmployee(req,res){

// }

module.exports = {
    createCompany,
    // createEmployee,
    // getEmployee,
    getCompany,
    deleteCompany,
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