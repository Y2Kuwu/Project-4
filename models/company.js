const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeSchema = new Schema({
    name : {
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        },
    role : {
        title :{type: String},
        duties:{type:Array},
    },
    age : {type: Date},
    credentials: {type:Array},
    isUser: {type: Boolean, default: false},
    isSuper: { type: Boolean, required: true, default: false},
    // record: recordSchema,
},
{
    timestamps : true,

})


const companySchema = new Schema({
    //connected to user
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: {type : String},
    employeeCount: {type: Number},
    currAnnual: {type: Number},
    prevAnnual: {type: Number},
    stock: {type: Number},
    //has array of employees
    employeeData: [employeeSchema]
    
},
{
    timestamps : true
})


module.exports = mongoose.model('Company' , companySchema);

// companySchema.methods.addEmployee = async function(employeeId){
    // const employee = this;
    // const currEmployee = employee.employeeData.find(emp => currEmployee.e._id.equals(employeeId))
    // if (currEmployee){
    //     currEmployee.qty += 1;
    //     companySchema.employeeCount.qty += 1;
    // }else {
    //     const 
    // }
    
    
    // }