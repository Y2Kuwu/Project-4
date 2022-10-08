const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {type : String},
    employee_count: {type: Number},
    curr_annual: {type: Number},
    prev_annual: {type: Number},
    stock: {type: Number}
},
{
    timestamps : true
})


module.exports = mongoose.model(companySchema);