const Employee = require('../../models/employee');
const Company = require('../../models/company');

async function createEmployee (req,res){
    try{
        req.body.user = req.user._id;
        const employee = await Employee.create(req.body);
        Company.findById(req.params.id, function(error, company){
        company.cast.push(employee);
        company.save()
        res.json(employee)
        })
        }   
        catch(error){
            res.status(400).json(error);
            console.log("Failed to create new employee")
            
        }
    }

    module.exports = {
        createEmployee,
        // getEmployee,
    }