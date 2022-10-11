const mongoose = require('mongoose');
const { createPath } = require('react-router-dom');
const Schema = mongoose.Schema;


const employeeSchema = new Schema({
    
    name : {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        },
    role : {
        title :{type: String},
        duties:{type:Array},
    },
    dob : {type: Date},
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
    stockSymbol: {type : String},
    ceo: {
        ceoName: {type: String, isSuper: true},
    },
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
module.exports = mongoose.model('Employee' , employeeSchema);

companySchema.statics.createEmployee = function (userId){
    return this.create(
        {user : userId, isEmployee: false},
        {user : userId},
        {upsert: true, new : true}
    )
}

companySchema.methods.findEmployee = async function(employeeId){
    const employee = this;
    const currEmployee = employee.employeeData.find(currEmployee => currEmployee.e._id.equals(employeeId))
    if (currEmployee){
        return currEmployee._id
    }else {
        return alert("employee not found"); 
    }



    
    }