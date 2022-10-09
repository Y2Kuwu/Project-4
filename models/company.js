const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {type : String},
    employeeCount: {type: Number},
    currAnnual: {type: Number},
    prevAnnual: {type: Number},
    stock: {type: Number}
},
{
    timestamps : true
})


module.exports = mongoose.model('Company' , companySchema);