const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeSchema = new Schema({
    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
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
    recordData: {
        type : [record]
    }

   
},
{
    timestamps : true,

})


const companySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: {type : String},
    employeeCount: {type: Number},
    currAnnual: {type: Number},
    prevAnnual: {type: Number},
    stock: {type: Number},
    employeeData: {
        type: [employeeSchema]
    }
},
{
    timestamps : true
})

companySchema.statics.getEmployee = function (userId){

}

module.exports = mongoose.model('Company' , companySchema);