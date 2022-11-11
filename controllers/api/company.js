const Company = require('../../models/company');
const employee = require('../../models/employee');
const Employee = require('../../models/employee');


async function getCompany(req,res){
    const company = await Company.find({});  //or maybe req.body
    res.json(company);
}


async function getOneCompany (req, res){
    try{
        req.body.user = req.user._id;
        const company = await Company.findById(req.params.id);
        console.log(req.body);
        company.populate('employees').exec(function(err, company){
            Employee.find({_id: {$nin: company.employee}})
            //added employee population per company 
            //remove list in employees?
        })
        res.json(company)
    }
    catch(error){
        res.status(400).json(error);
        console.log("Cannot find company details")
    }
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
        console.log("Failed to create new company")
    }
}


async function deleteCompany (req, res){
    try{
        // {_id: req.params.id, user: req.user._id}
    const company = await Company.findByIdAndDelete(req.params.id);
    console.log(req.body)
    res.json(company)
    }   
    catch(error){
        res.status(400).json(error);
        console.log("Failed to delete company")
    }
}



async function updateCompany (req, res){
    try{
        // req.body.user = req.user._id;
        const company = await Company.findByIdAndUpdate({_id: req.params.id}, req.body);
        console.log(req.body);
        // console.log(req.params._id);
        res.json(company.id)
    }
    catch(error){
        res.status(400).json(error);
        console.log("Cannot find company details")
    }
}



    module.exports = {
        createCompany,
        getCompany,
        deleteCompany,
        getOneCompany,
        updateCompany,
    }
