// const Company = require('../../models/company');
const Employee = require('../../models/employee');


// company.populate('employees').exec(function(err, company){
//     Employee.find({_id: {$nin: company.employee}})
//     //added employee population per company 
//     //remove list in employees?
// })

// const company = Company.findById(req.params.id)
// company.push(employee)
//         company.save();

async function createEmployee (req,res){
    try{
        req.body.user = req.user._id;
        const employee = await Employee.create(req.body);
        console.log(req.body)
        res.json(employee)
        }   
        catch(error){
            res.status(400).json(error);
            console.log("Failed to create new employee")
        }
    }

// async function onboardEmployee (req,res){
//     const company = Company.findById(req.params.id);
    
// }

// async function getEmployeeByAtt (req,res){
//     try{
//     req.body.user = req.user._id;
//     const employee = await Employee.findById(req.params.id);
//     console.log(req.body);
//     res.json(employee)
// }
// catch(error){
//     res.status(400).json(error);
//     console.log("Cannot find employee details")
// }
// }

// async function employeeCompList (req,res){
//     try{
//     req.body.user = req.user._id;
//     //const company = await Company.findById(req.params.id);
//     const employee = await Employee.find({});
//     console.log(req.body);
//     res.json(employee)
// }
// catch(error){
//     res.status(400).json(error);
//     console.log("Cannot find employee details")
// }
// }

// async function updateEmployee (req, res){
//     try{
//         const employee = await Employee.findByIdAndUpdate({_id: req.params.id}, req.body);
//         console.log(req.body);
//         res.json(employee.id)
//     }
//     catch(error){
//         res.status(400).json(error);
//         console.log("Cannot find company employee")
//     }
// }

// async function deleteEmployee (req, res){
//     try{
//     const employee = await employee.findByIdAndDelete(req.params.id);
//     console.log(req.body)
//     res.json(employee)
//     }   
//     catch(error){
//         res.status(400).json(error);
//         console.log("Failed to delete employee")
//     }
// }


    module.exports = {
        createEmployee,
        // getEmployeeByAtt,
        // employeeCompList,
        // updateEmployee,
        // deleteEmployee,

    }