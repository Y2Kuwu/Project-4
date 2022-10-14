const Company = require('../../models/company');
// const Employee = require('../../models/company');


async function getCompany(req,res){
    const company = await Company.find({});  //or maybe req.body
    res.json(company);
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

async function detailCompany (req, res){
    try{
        const company = await Company.findById({'company._id': req.params._id});
        console.log(req.body);
        res.json(company)
    }
    catch(error){
        res.status(400).json(error);
        console.log("Cannot find company details")
    }
}

async function updateCompany (req, res){
    try{
        const company = await Company.findByIdAndUpdate(req.params.id);
        console.log(req.params.id);
        res.json(company.id)
    }
    catch(error){
        res.status(400).json(error);
        console.log("Cannot find company details")
    }
}

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


    module.exports = {
        createCompany,
        createEmployee,
        // getEmployee,
        getCompany,
        deleteCompany,
        detailCompany,
    }
